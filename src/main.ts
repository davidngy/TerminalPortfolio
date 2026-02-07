const input = document.querySelector<HTMLInputElement>("#input");
if (!input) throw new Error("Missing input");
const output = document.getElementById("output");
if (!output) throw new Error("Missing output");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    output.innerText = input.value;
  }
});
