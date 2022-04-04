// Warning: Don't edit file (autogenerated from python -m dev codegen).

import { ConfigurationTarget, workspace } from "vscode";

export function get<T>(key: string): T | undefined {
    var dot = key.lastIndexOf('.');
    var section = key.substring(0, dot);
    var name = key.substring(dot + 1);
    return workspace.getConfiguration(section).get(name);
}

export const ROBOCORP_LANGUAGE_SERVER_TCP_PORT = "robocorp.language-server.tcp-port";
export const ROBOCORP_LANGUAGE_SERVER_ARGS = "robocorp.language-server.args";
export const ROBOCORP_LANGUAGE_SERVER_PYTHON = "robocorp.language-server.python";
export const ROBOCORP_RCC_LOCATION = "robocorp.rcc.location";
export const ROBOCORP_RCC_ENDPOINT = "robocorp.rcc.endpoint";
export const ROBOCORP_RCC_CONFIG_LOCATION = "robocorp.rcc.config_location";
export const ROBOCORP_HOME = "robocorp.home";
export const ROBOCORP_VERIFY_LSP = "robocorp.verifyLSP";
export const ROBOCORP_AUTO_SET_PYTHON_EXTENSION_INTERPRETER = "robocorp.autoSetPythonExtensionInterpreter";
export const ROBOCORP_AUTO_SET_PYTHON_EXTENSION_DISABLE_ACTIVATE_TERMINAL = "robocorp.autoSetPythonExtensionDisableActivateTerminal";

export function getLanguageServerTcpPort(): number {
    let key = ROBOCORP_LANGUAGE_SERVER_TCP_PORT;
    return get<number>(key);
}


export async function setLanguageServerTcpPort(value): Promise<void> {
    let key = ROBOCORP_LANGUAGE_SERVER_TCP_PORT;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getLanguageServerArgs(): string[] {
    let key = ROBOCORP_LANGUAGE_SERVER_ARGS;
    return get<string[]>(key);
}


export async function setLanguageServerArgs(value): Promise<void> {
    let key = ROBOCORP_LANGUAGE_SERVER_ARGS;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getLanguageServerPython(): string {
    let key = ROBOCORP_LANGUAGE_SERVER_PYTHON;
    return get<string>(key);
}


export async function setLanguageServerPython(value): Promise<void> {
    let key = ROBOCORP_LANGUAGE_SERVER_PYTHON;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getRccLocation(): string {
    let key = ROBOCORP_RCC_LOCATION;
    return get<string>(key);
}


export async function setRccLocation(value): Promise<void> {
    let key = ROBOCORP_RCC_LOCATION;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getRccEndpoint(): string {
    let key = ROBOCORP_RCC_ENDPOINT;
    return get<string>(key);
}


export async function setRccEndpoint(value): Promise<void> {
    let key = ROBOCORP_RCC_ENDPOINT;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getRccConfigLocation(): string {
    let key = ROBOCORP_RCC_CONFIG_LOCATION;
    return get<string>(key);
}


export async function setRccConfigLocation(value): Promise<void> {
    let key = ROBOCORP_RCC_CONFIG_LOCATION;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getHome(): string {
    let key = ROBOCORP_HOME;
    return get<string>(key);
}


export async function setHome(value): Promise<void> {
    let key = ROBOCORP_HOME;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getVerifylsp(): boolean {
    let key = ROBOCORP_VERIFY_LSP;
    return get<boolean>(key);
}


export async function setVerifylsp(value): Promise<void> {
    let key = ROBOCORP_VERIFY_LSP;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getAutosetpythonextensioninterpreter(): boolean {
    let key = ROBOCORP_AUTO_SET_PYTHON_EXTENSION_INTERPRETER;
    return get<boolean>(key);
}


export async function setAutosetpythonextensioninterpreter(value): Promise<void> {
    let key = ROBOCORP_AUTO_SET_PYTHON_EXTENSION_INTERPRETER;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}


export function getAutosetpythonextensiondisableactivateterminal(): boolean {
    let key = ROBOCORP_AUTO_SET_PYTHON_EXTENSION_DISABLE_ACTIVATE_TERMINAL;
    return get<boolean>(key);
}


export async function setAutosetpythonextensiondisableactivateterminal(value): Promise<void> {
    let key = ROBOCORP_AUTO_SET_PYTHON_EXTENSION_DISABLE_ACTIVATE_TERMINAL;
    let i = key.lastIndexOf('.');

    let config = workspace.getConfiguration(key.slice(0, i));
    await config.update(key.slice(i + 1), value, ConfigurationTarget.Global);
}
