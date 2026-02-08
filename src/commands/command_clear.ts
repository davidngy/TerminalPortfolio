import { terminal } from "../createInputLine";

export function clear() {
    terminal.innerHTML = "";
    return "";
}