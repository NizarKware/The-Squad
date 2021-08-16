let data = [
  {
    name: "mateo",
    age: "32",
  },
  {
    name: "Sarah",
    age: "18",
  },
  {
    name: "Jack",
    age: "26",
  },
  {
    name: "Tim",
    age: "28",
  },
  {
    name: "Sam",
    age: "32",
  },
  {
    name: "Jonas",
    age: "24",
  },
];
const info = document.querySelector("#info");
let details = data.map(function (item) {
  return (
    "<div>" + item.name + " " + " is " + item.age + " Years old" + "</div>"
  );
});
info.innerHTML = details.join("\n");
