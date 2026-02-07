import { parser } from "./parser";

const input = document.querySelector<HTMLInputElement>("#input");
if (!input) throw new Error("Missing input");
const output = document.getElementById("output");
if (!output) throw new Error("Missing output");
let command;
let parsedInput: string[];
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    parsedInput = parser(input.value);
    command = parsedInput[0];
    output.innerText = command;
  }
});
