// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];


document.addEventListener("DOMContentLoaded", (e) => {
 
  function showList(array) {
    const container = document.getElementById("list");
    container.innerHTML = "";
    
    array.forEach((element) => {
      if (typeof element === "string") { 
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        container.appendChild(li);
      }
    });
  }
  showList(strangeArray);
});