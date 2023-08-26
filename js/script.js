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
    
    const filteredStrings = array.filter(element => typeof element === "string");
    const sortedStrings = filteredStrings.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

    sortedStrings.forEach((element) => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(element));
      container.appendChild(li);
    });
  } 
  showList(strangeArray);
});
