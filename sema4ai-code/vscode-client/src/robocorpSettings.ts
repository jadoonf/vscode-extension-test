// Warning: Don't edit file (autogenerated from python -m dev codegen).

import { ConfigurationTarget, workspace } from "vscode";

export function get<T>(key: string): T | undefined {
    var dot = key.lastIndexOf('.');
    var section = key.substring(0, dot);
    var name = key.substring(dot + 1);
    return workspace.getConfiguration(section).get(name);
}

export const SEMA4AI_LANGUAGE_SERVER_TCP_PORT = "sema4ai.language-server.tcp-port";
export const SEMA4AI_LANGUAGE_SERVER_ARGS = "sema4ai.language-server.args";
export const SEMA4AI_LANGUAGE_SERVER_PYTHON = "sema4ai.language-server.python";
export const SEMA4AI_RCC_LOCATION = "sema4ai.rcc.location";
export const SEMA4AI_RCC_ENDPOINT = "sema4ai.rcc.endpoint";
export const SEMA4AI_RCC_CONFIG_LOCATION = "sema4ai.rcc.config_location";
export const SEMA4AI_HOME = "sema4ai.home";
export const SEMA4AI_VERIFY_LSP = "sema4ai.verifyLSP";
export const SEMA4AI_AUTO_SET_PYTHON_EXTENSION_INTERPRETER = "sema4ai.autoSetPythonExtensionInterpreter";
export const SEMA4AI_AUTO_SET_PYTHON_EXTENSION_DISABLE_ACTIVATE_TERMINAL = "sema4ai.autoSetPythonExtensionDisableActivateTerminal";
export const SEMA4AI_PROCEED_WITH_LONG_PATHS_DISABLED = "sema4ai.proceedWithLongPathsDisabled";
export const SEMA4AI_VAULT_TOKEN_TIMEOUT_IN_MINUTES = "sema4ai.vaultTokenTimeoutInMinutes";
export const SEMA4AI_CODE_LENS_ROBO_LAUNCH = "sema4ai.codeLens.roboLaunch";
export const SEMA4AI_ACTION_SERVER_LOCATION = "sema4ai.actionServer.location";

export function getLanguageServerTcpPort(): number {
    let key = SEMA4AI_LANGUAGE_SERVER_TCP_PORT;
    return get<number>(key);
}


export async function setLanguageServerTcpPort(value): Promise<void> {
    let key = SEMA4AI_LANGUAGE_SERVER_TCP_PORT;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getLanguageServerArgs(): string[] {
    let key = SEMA4AI_LANGUAGE_SERVER_ARGS;
    return get<string[]>(key);
}


export async function setLanguageServerArgs(value): Promise<void> {
    let key = SEMA4AI_LANGUAGE_SERVER_ARGS;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getLanguageServerPython(): string {
    let key = SEMA4AI_LANGUAGE_SERVER_PYTHON;
    return get<string>(key);
}


export async function setLanguageServerPython(value): Promise<void> {
    let key = SEMA4AI_LANGUAGE_SERVER_PYTHON;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getRccLocation(): string {
    let key = SEMA4AI_RCC_LOCATION;
    return get<string>(key);
}


export async function setRccLocation(value): Promise<void> {
    let key = SEMA4AI_RCC_LOCATION;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getRccEndpoint(): string {
    let key = SEMA4AI_RCC_ENDPOINT;
    return get<string>(key);
}


export async function setRccEndpoint(value): Promise<void> {
    let key = SEMA4AI_RCC_ENDPOINT;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getRccConfigLocation(): string {
    let key = SEMA4AI_RCC_CONFIG_LOCATION;
    return get<string>(key);
}


export async function setRccConfigLocation(value): Promise<void> {
    let key = SEMA4AI_RCC_CONFIG_LOCATION;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getHome(): string {
    let key = SEMA4AI_HOME;
    return get<string>(key);
}


export async function setHome(value): Promise<void> {
    let key = SEMA4AI_HOME;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getVerifylsp(): boolean {
    let key = SEMA4AI_VERIFY_LSP;
    return get<boolean>(key);
}


export async function setVerifylsp(value): Promise<void> {
    let key = SEMA4AI_VERIFY_LSP;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getAutosetpythonextensioninterpreter(): boolean {
    let key = SEMA4AI_AUTO_SET_PYTHON_EXTENSION_INTERPRETER;
    return get<boolean>(key);
}


export async function setAutosetpythonextensioninterpreter(value): Promise<void> {
    let key = SEMA4AI_AUTO_SET_PYTHON_EXTENSION_INTERPRETER;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getAutosetpythonextensiondisableactivateterminal(): boolean {
    let key = SEMA4AI_AUTO_SET_PYTHON_EXTENSION_DISABLE_ACTIVATE_TERMINAL;
    return get<boolean>(key);
}


export async function setAutosetpythonextensiondisableactivateterminal(value): Promise<void> {
    let key = SEMA4AI_AUTO_SET_PYTHON_EXTENSION_DISABLE_ACTIVATE_TERMINAL;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getProceedwithlongpathsdisabled(): boolean {
    let key = SEMA4AI_PROCEED_WITH_LONG_PATHS_DISABLED;
    return get<boolean>(key);
}


export async function setProceedwithlongpathsdisabled(value): Promise<void> {
    let key = SEMA4AI_PROCEED_WITH_LONG_PATHS_DISABLED;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getVaulttokentimeoutinminutes(): number {
    let key = SEMA4AI_VAULT_TOKEN_TIMEOUT_IN_MINUTES;
    return get<number>(key);
}


export async function setVaulttokentimeoutinminutes(value): Promise<void> {
    let key = SEMA4AI_VAULT_TOKEN_TIMEOUT_IN_MINUTES;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getCodelensRobolaunch(): boolean {
    let key = SEMA4AI_CODE_LENS_ROBO_LAUNCH;
    return get<boolean>(key);
}


export async function setCodelensRobolaunch(value): Promise<void> {
    let key = SEMA4AI_CODE_LENS_ROBO_LAUNCH;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getActionserverLocation(): string {
    let key = SEMA4AI_ACTION_SERVER_LOCATION;
    return get<string>(key);
}


export async function setActionserverLocation(value): Promise<void> {
    let key = SEMA4AI_ACTION_SERVER_LOCATION;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}
