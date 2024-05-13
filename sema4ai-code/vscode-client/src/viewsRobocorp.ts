import * as vscode from "vscode";
import * as roboCommands from "./robocorpCommands";
import { CloudEntry, treeViewIdToTreeDataProvider } from "./viewsCommon";
import { SEMA4AI_SUBMIT_ISSUE } from "./robocorpCommands";
import { TREE_VIEW_ROBOCORP_CLOUD_TREE } from "./robocorpViews";
import { getWorkspaceDescription } from "./ask";
import { logError } from "./channel";
import { ActionResult, IAccountInfo, IVaultInfo } from "./protocols";

export class CloudTreeDataProvider implements vscode.TreeDataProvider<CloudEntry> {
    private _onDidChangeTreeData: vscode.EventEmitter<CloudEntry | null> = new vscode.EventEmitter<CloudEntry | null>();
    readonly onDidChangeTreeData: vscode.Event<CloudEntry | null> = this._onDidChangeTreeData.event;

    public refreshOnce = false;

    fireRootChange() {
        this._onDidChangeTreeData.fire(null);
    }

    private async _fillRoots(ret: CloudEntry[]) {
        const accountInfoResult: ActionResult<IAccountInfo> = await vscode.commands.executeCommand(
            roboCommands.SEMA4AI_GET_LINKED_ACCOUNT_INFO_INTERNAL
        );
        const profileListResultPromise: Thenable<ActionResult<any>> = vscode.commands.executeCommand(
            roboCommands.SEMA4AI_PROFILE_LIST_INTERNAL
        );

        if (!accountInfoResult.success) {
            ret.push({
                "label": "Link to Control Room",
                "iconPath": "link",
                "viewItemContextValue": "cloudLoginItem",
                "command": {
                    "title": "Link to Control Room",
                    "command": roboCommands.SEMA4AI_CLOUD_LOGIN,
                },
            });
        } else {
            const accountInfo: IAccountInfo = accountInfoResult.result;
            ret.push({
                "label": "Linked: " + accountInfo.fullname + " (" + accountInfo.email + ")",
                "iconPath": "link",
                "viewItemContextValue": "cloudLogoutItem",
            });

            let vaultInfoResult: ActionResult<any> = await vscode.commands.executeCommand(
                roboCommands.SEMA4AI_GET_CONNECTED_VAULT_WORKSPACE_INTERNAL
            );

            if (!vaultInfoResult || !vaultInfoResult.success || !vaultInfoResult.result) {
                ret.push({
                    "label": "Workspace (vault, storage): disconnected.",
                    "iconPath": "unlock",
                    "viewItemContextValue": "workspaceDisconnected",
                    "tooltip": `Connecting to a workspace enables accessing vault and storage settings in the selected workspace.`,
                });
            } else {
                const result: IVaultInfo = vaultInfoResult.result;
                const desc = getWorkspaceDescription(result);
                ret.push({
                    "label": "Workspace: " + desc,
                    "iconPath": "lock",
                    "viewItemContextValue": "workspaceConnected",
                    "tooltip": `Enables access to vault and storage settings in: "${getWorkspaceDescription(result)}"`,
                });
            }
        }

        const profileListResult = await profileListResultPromise;
        if (profileListResult?.success) {
            ret.push({
                "label": `Profile: ${profileListResult.result["current"]}`,
                "iconPath": "person",
                "viewItemContextValue": "profileItem",
            });
        } else {
            ret.push({
                "label": `Profile: ${profileListResult.message}`,
                "iconPath": "person",
                "viewItemContextValue": "profileItem",
            });
        }
    }

    async getChildren(element?: CloudEntry): Promise<CloudEntry[]> {
        if (!element) {
            let ret: CloudEntry[] = [];
            try {
                await this._fillRoots(ret);
                ret.push({
                    "label": "Documentation",
                    "iconPath": "book",
                    "command": {
                        "title": "Open https://robocorp.com/docs",
                        "command": "vscode.open",
                        "arguments": [vscode.Uri.parse("https://robocorp.com/docs")],
                    },
                });
            } catch (error) {
                logError("Error getting children", error, "VIEWS_CLOUD_COMPUTE_ROOTS");
                ret.push({
                    "label": "Error initializing. Click to see Output > Sema4.ai Code.",
                    "iconPath": "error",
                    "command": {
                        "title": "See output",
                        "command": roboCommands.SEMA4AI_SHOW_OUTPUT,
                    },
                });
            }
            ret.push({
                "label": "Submit issue to Robocorp",
                "iconPath": "report",
                "command": {
                    "title": "Submit issue to Robocorp",
                    "command": SEMA4AI_SUBMIT_ISSUE,
                },
            });

            return ret;
        }
        if (element.children) {
            return element.children;
        }
        return [];
    }

    getTreeItem(element: CloudEntry): vscode.TreeItem {
        const treeItem = new vscode.TreeItem(
            element.label,
            element.children ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None
        );
        treeItem.command = element.command;
        treeItem.iconPath = new vscode.ThemeIcon(element.iconPath);
        if (element.viewItemContextValue) {
            treeItem.contextValue = element.viewItemContextValue;
        }
        if (element.tooltip) {
            treeItem.tooltip = element.tooltip;
        }
        return treeItem;
    }
}

export function refreshCloudTreeView() {
    let dataProvider: CloudTreeDataProvider = <CloudTreeDataProvider>(
        treeViewIdToTreeDataProvider.get(TREE_VIEW_ROBOCORP_CLOUD_TREE)
    );
    if (dataProvider) {
        dataProvider.refreshOnce = true;
        dataProvider.fireRootChange();
    }
}
