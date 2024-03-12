// Warning: Don't edit file (autogenerated from python -m dev codegen).

export const ROBOCORP_GET_LANGUAGE_SERVER_PYTHON = "robocorp.getLanguageServerPython";  // Get a python executable suitable to start the language server
export const ROBOCORP_GET_LANGUAGE_SERVER_PYTHON_INFO = "robocorp.getLanguageServerPythonInfo";  // Get info suitable to start the language server {pythonExe, environ}
export const ROBOCORP_GET_PLUGINS_DIR = "robocorp.getPluginsDir";  // Get the directory for plugins
export const ROBOCORP_CREATE_ROBOT = "robocorp.createRobot";  // Create Task Package (Robot)
export const ROBOCORP_CREATE_ACTION_PACKAGE = "robocorp.createActionPackage";  // Create Action Package
export const ROBOCORP_CREATE_TASK_OR_ACTION_PACKAGE = "robocorp.createTaskOrActionPackage";  // Create Action Package
export const ROBOCORP_LIST_ROBOT_TEMPLATES_INTERNAL = "robocorp.listRobotTemplates.internal";  // Provides a list with the available Task Package (Robot) templates
export const ROBOCORP_CREATE_ROBOT_INTERNAL = "robocorp.createRobot.internal";  // Actually calls rcc to create the Task Package (Robot)
export const ROBOCORP_UPLOAD_ROBOT_TO_CLOUD = "robocorp.uploadRobotToCloud";  // Upload Task Package (Robot) to Control Room
export const ROBOCORP_LOCAL_LIST_ROBOTS_INTERNAL = "robocorp.localListRobots.internal";  // Lists the activities currently available in the workspace
export const ROBOCORP_IS_LOGIN_NEEDED_INTERNAL = "robocorp.isLoginNeeded.internal";  // Checks if the user is already linked to an account
export const ROBOCORP_GET_LINKED_ACCOUNT_INFO_INTERNAL = "robocorp.getLinkedAccountInfo.internal";  // Provides information related to the current linked account
export const ROBOCORP_CLOUD_LOGIN = "robocorp.cloudLogin";  // Link to Control Room
export const ROBOCORP_CLOUD_LOGIN_INTERNAL = "robocorp.cloudLogin.internal";  // Link to Control Room (receives credentials)
export const ROBOCORP_CLOUD_LIST_WORKSPACES_INTERNAL = "robocorp.cloudListWorkspaces.internal";  // Lists the workspaces available for the user (in the Control Room)
export const ROBOCORP_UPLOAD_TO_NEW_ROBOT_INTERNAL = "robocorp.uploadToNewRobot.internal";  // Uploads a Task Package (Robot) as a new Task Package (Robot) in the Control Room
export const ROBOCORP_UPLOAD_TO_EXISTING_ROBOT_INTERNAL = "robocorp.uploadToExistingRobot.internal";  // Uploads a Task Package (Robot) as an existing Task Package (Robot) in the Control Room
export const ROBOCORP_RUN_IN_RCC_INTERNAL = "robocorp.runInRcc.internal";  // Runs a custom command in RCC
export const ROBOCORP_RUN_ROBOT_RCC = "robocorp.runRobotRcc";  // Run Task Package (Robot)
export const ROBOCORP_RUN_ACTION_FROM_ACTION_PACKAGE = "robocorp.runActionFromActionPackage";  // Run Action (from Action Package)
export const ROBOCORP_DEBUG_ROBOT_RCC = "robocorp.debugRobotRcc";  // Debug Task Package (Robot)
export const ROBOCORP_DEBUG_ACTION_FROM_ACTION_PACKAGE = "robocorp.debugActionFromActionPackage";  // Debug Action (from Action Package)
export const ROBOCORP_ROBOTS_VIEW_TASK_RUN = "robocorp.robotsViewTaskRun";  // Launch Task
export const ROBOCORP_ROBOTS_VIEW_TASK_DEBUG = "robocorp.robotsViewTaskDebug";  // Debug Task
export const ROBOCORP_ROBOTS_VIEW_ACTION_RUN = "robocorp.robotsViewActionRun";  // Launch Action
export const ROBOCORP_ROBOTS_VIEW_ACTION_DEBUG = "robocorp.robotsViewActionDebug";  // Debug Action
export const ROBOCORP_ROBOTS_VIEW_ACTION_EDIT_INPUT = "robocorp.robotsViewActionEditInput";  // Configure Action Input
export const ROBOCORP_ROBOTS_VIEW_ACTION_OPEN = "robocorp.robotsViewActionOpen";  // Open Action
export const ROBOCORP_RUN_ROBOCORPS_PYTHON_TASK = "robocorp.runRobocorpsPythonTask";  // Run Robocorp's Python Task
export const ROBOCORP_DEBUG_ROBOCORPS_PYTHON_TASK = "robocorp.debugRobocorpsPythonTask";  // Debug Robocorp's Python Task
export const ROBOCORP_SAVE_IN_DISK_LRU = "robocorp.saveInDiskLRU";  // Saves some data in an LRU in the disk
export const ROBOCORP_LOAD_FROM_DISK_LRU = "robocorp.loadFromDiskLRU";  // Loads some LRU data from the disk
export const ROBOCORP_COMPUTE_ROBOT_LAUNCH_FROM_ROBOCORP_CODE_LAUNCH = "robocorp.computeRobotLaunchFromRobocorpCodeLaunch";  // Computes a Task Package (Robot) launch debug configuration based on the robocorp code launch debug configuration
export const ROBOCORP_SET_PYTHON_INTERPRETER = "robocorp.setPythonInterpreter";  // Set python executable based on robot.yaml
export const ROBOCORP_RESOLVE_INTERPRETER = "robocorp.resolveInterpreter";  // Resolves the interpreter to be used given a path
export const ROBOCORP_CLOUD_LOGOUT = "robocorp.cloudLogout";  // Unlink and remove credentials from Control Room
export const ROBOCORP_CLOUD_LOGOUT_INTERNAL = "robocorp.cloudLogout.internal";  // Unlink and remove credentials from Control Room internal
export const ROBOCORP_REFRESH_ROBOTS_VIEW = "robocorp.refreshRobotsView";  // Refresh Task Packages (Robots) view
export const ROBOCORP_REFRESH_ROBOT_CONTENT_VIEW = "robocorp.refreshRobotContentView";  // Refresh Task Package (Robot) Content view
export const ROBOCORP_NEW_FILE_IN_ROBOT_CONTENT_VIEW = "robocorp.newFileInRobotContentView";  // New File
export const ROBOCORP_NEW_FOLDER_IN_ROBOT_CONTENT_VIEW = "robocorp.newFolderInRobotContentView";  // New Folder
export const ROBOCORP_DELETE_RESOURCE_IN_ROBOT_CONTENT_VIEW = "robocorp.deleteResourceInRobotContentView";  // Delete
export const ROBOCORP_RENAME_RESOURCE_IN_ROBOT_CONTENT_VIEW = "robocorp.renameResourceInRobotContentView";  // Rename
export const ROBOCORP_REFRESH_CLOUD_VIEW = "robocorp.refreshCloudView";  // Refresh Robocorp view
export const ROBOCORP_GET_LOCATORS_JSON_INFO = "robocorp.getLocatorsJsonInfo";  // Obtain information from the locators.json given a robot.yaml
export const ROBOCORP_REMOVE_LOCATOR_FROM_JSON_INTERNAL = "robocorp.removeLocatorFromJson.internal";  // Remove a named locator from locators.json
export const ROBOCORP_REMOVE_LOCATOR_FROM_JSON = "robocorp.removeLocatorFromJson";  // Remove Locator
export const ROBOCORP_OPEN_LOCATORS_JSON = "robocorp.openLocatorsJson";  // Open locators.json
export const ROBOCORP_OPEN_CLOUD_HOME = "robocorp.openCloudHome";  // Open cloud home
export const ROBOCORP_NEW_ROBOCORP_INSPECTOR_BROWSER = "robocorp.newRobocorpInspectorBrowser";  // Add Web Locator
export const ROBOCORP_NEW_ROBOCORP_INSPECTOR_WINDOWS = "robocorp.newRobocorpInspectorWindows";  // Add Windows Locator
export const ROBOCORP_NEW_ROBOCORP_INSPECTOR_IMAGE = "robocorp.newRobocorpInspectorImage";  // Add Image Locator
export const ROBOCORP_OPEN_PLAYWRIGHT_RECORDER = "robocorp.openPlaywrightRecorder";  // Open Playwright Recorder
export const ROBOCORP_OPEN_PLAYWRIGHT_RECORDER_INTERNAL = "robocorp.openPlaywrightRecorder.internal";  // Open Playwright Recorder Internal
export const ROBOCORP_EDIT_ROBOCORP_INSPECTOR_LOCATOR = "robocorp.editRobocorpInspectorLocator";  // Edit locator
export const ROBOCORP_COPY_LOCATOR_TO_CLIPBOARD_INTERNAL = "robocorp.copyLocatorToClipboard.internal";  // Copy locator name to clipboard
export const ROBOCORP_OPEN_ROBOT_TREE_SELECTION = "robocorp.openRobotTreeSelection";  // Configure Task Package (Robot) (robot.yaml)
export const ROBOCORP_OPEN_ROBOT_CONDA_TREE_SELECTION = "robocorp.openRobotCondaTreeSelection";  // Configure Dependencies (conda.yaml)
export const ROBOCORP_OPEN_PACKAGE_YAML_TREE_SELECTION = "robocorp.openPackageYamlTreeSelection";  // Configure Action Package (package.yaml)
export const ROBOCORP_OPEN_EXTERNALLY = "robocorp.openExternally";  // Open externally
export const ROBOCORP_OPEN_IN_VS_CODE = "robocorp.openInVSCode";  // Open in VSCode
export const ROBOCORP_REVEAL_IN_EXPLORER = "robocorp.revealInExplorer";  // Reveal in File Explorer
export const ROBOCORP_REVEAL_ROBOT_IN_EXPLORER = "robocorp.revealRobotInExplorer";  // Reveal robot.yaml in File Explorer
export const ROBOCORP_CLOUD_UPLOAD_ROBOT_TREE_SELECTION = "robocorp.cloudUploadRobotTreeSelection";  // Upload Task Package (Robot) to Control Room
export const ROBOCORP_CREATE_RCC_TERMINAL_TREE_SELECTION = "robocorp.rccTerminalCreateRobotTreeSelection";  // Open terminal with Task Package (Robot) environment
export const ROBOCORP_SEND_METRIC = "robocorp.sendMetric";  // Send metric
export const ROBOCORP_SUBMIT_ISSUE_INTERNAL = "robocorp.submitIssue.internal";  // Submit issue (internal)
export const ROBOCORP_SUBMIT_ISSUE = "robocorp.submitIssue";  // Submit issue to Robocorp
export const ROBOCORP_INSPECTOR_INTERNAL = "robocorp.inspector.internal";  // Inspector Manager (internal)
export const ROBOCORP_INSPECTOR = "robocorp.inspector";  // Open Inspector
export const ROBOCORP_INSPECTOR_DUPLICATE = "robocorp.inspector.duplicate";  // Create & manage locators
export const ROBOCORP_ERROR_FEEDBACK_INTERNAL = "robocorp.errorFeedback.internal";  // Error feedback (internal)
export const ROBOCORP_FEEDBACK_INTERNAL = "robocorp.feedback.internal";  // Feedback (internal)
export const ROBOCORP_CONFIGURATION_DIAGNOSTICS_INTERNAL = "robocorp.configuration.diagnostics.internal";  // Task Package (Robot) Configuration Diagnostics (internal)
export const ROBOCORP_CONFIGURATION_DIAGNOSTICS = "robocorp.configuration.diagnostics";  // Task Package (Robot) Configuration Diagnostics
export const ROBOCORP_RCC_TERMINAL_NEW = "robocorp.rccTerminalNew";  // Terminal with Task Package (Robot) environment
export const ROBOCORP_LIST_WORK_ITEMS_INTERNAL = "robocorp.listWorkItems.internal";  // Lists the work items available for a Task Package (Robot)
export const ROBOCORP_UPDATE_LAUNCH_ENV = "robocorp.updateLaunchEnv";  // Updates the environment variables used for some launch (given a Task Package (Robot))
export const ROBOCORP_UPDATE_LAUNCH_ENV_GET_VAULT_ENV_INTERNAL = "robocorp.updateLaunchEnv.getVaultEnv.internal";  // Provides the environment variables related to the vault.
export const ROBOCORP_NEW_WORK_ITEM_IN_WORK_ITEMS_VIEW = "robocorp.newWorkItemInWorkItemsView";  // New Work Item
export const ROBOCORP_DELETE_WORK_ITEM_IN_WORK_ITEMS_VIEW = "robocorp.deleteWorkItemInWorkItemsView";  // Delete Work Item
export const ROBOCORP_HELP_WORK_ITEMS = "robocorp.helpWorkItems";  // Work Items Help
export const ROBOCORP_CONVERT_OUTPUT_WORK_ITEM_TO_INPUT = "robocorp.convertOutputWorkItemToInput";  // Convert output work item to input
export const ROBOCORP_VERIFY_LIBRARY_VERSION_INTERNAL = "robocorp.verifyLibraryVersion.internal";  // Collect a library version and verify if it matches some expected version
export const ROBOCORP_CONNECT_WORKSPACE = "robocorp.connectWorkspace";  // Connect to Control Room Workspace (vault, storage, ...)
export const ROBOCORP_DISCONNECT_WORKSPACE = "robocorp.disconnectWorkspace";  // Disconnect from Control Room Workspace
export const ROBOCORP_GET_CONNECTED_VAULT_WORKSPACE_INTERNAL = "robocorp.getConnectedVaultWorkspace.internal";  // Gets workspace id currently connected
export const ROBOCORP_SET_CONNECTED_VAULT_WORKSPACE_INTERNAL = "robocorp.setConnectedVaultWorkspace.internal";  // Sets the currently connected Control Room Workspace
export const ROBOCORP_OPEN_VAULT_HELP = "robocorp.openVaultHelp";  // Open vault help
export const ROBOCORP_CLEAR_ENV_AND_RESTART = "robocorp.clearEnvAndRestart";  // Clear Robocorp (RCC) environments and restart Robocorp Code
export const ROBOCORP_SHOW_OUTPUT = "robocorp.showOutput";  // Show Robocorp Code > Output logs
export const ROBOCORP_SHOW_INTERPRETER_ENV_ERROR = "robocorp.showInterpreterEnvError";  // Show error related to interpreter env creation
export const ROBOCORP_OPEN_FLOW_EXPLORER_TREE_SELECTION = "robocorp.openFlowExplorerTreeSelection";  // Open Flow Explorer
export const ROBOCORP_CONVERT_PROJECT = "robocorp.convertProject";  // Conversion Accelerator from third party RPA to Robocorp Task Package (Robot)
export const ROBOCORP_PROFILE_IMPORT = "robocorp.profileImport";  // Import Profile
export const ROBOCORP_PROFILE_IMPORT_INTERNAL = "robocorp.profileImport.internal";  // Import Profile (internal)
export const ROBOCORP_PROFILE_SWITCH = "robocorp.profileSwitch";  // Switch Profile
export const ROBOCORP_PROFILE_SWITCH_INTERNAL = "robocorp.profileSwitch.internal";  // Switch Profile
export const ROBOCORP_PROFILE_LIST_INTERNAL = "robocorp.profileList.internal";  // List Profiles
export const ROBOCORP_HAS_PRE_RUN_SCRIPTS_INTERNAL = "robocorp.hasPreRunScripts.internal";  // Has Pre Run Scripts
export const ROBOCORP_RUN_PRE_RUN_SCRIPTS_INTERNAL = "robocorp.runPreRunScripts.internal";  // Run Pre Run Scripts
export const ROBOCORP_GET_PY_PI_BASE_URLS_INTERNAL = "robocorp.getPyPiBaseUrls.internal";  // Get PyPi base urls
export const ROBOCORP_START_ACTION_SERVER = "robocorp.startActionServer";  // Start Action Server
export const ROBOCORP_DOWNLOAD_ACTION_SERVER = "robocorp.downloadActionServer";  // Download Action Server
export const ROBOCORP_START_ACTION_SERVER_INTERNAL = "robocorp.startActionServer.internal";  // Start Action Server (internal)
export const ROBOCORP_LIST_ACTIONS_INTERNAL = "robocorp.listActions.internal";  // Lists the actions available in an action package given a root dir (internal)