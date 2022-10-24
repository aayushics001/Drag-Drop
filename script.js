console.log("D&D");

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whitebox");

imgBox.addEventListener("dragstart", (e) => {
  console.log("Drag start has been triggered");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = " hide";
  }, 0);
});
imgBox.addEventListener("dragend", (e) => {
  console.log("Drag end has been triggered");
  e.target.className = "imgBox";
});

for (whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("Drag Over has been triggered");
  });
  whiteBox.addEventListener("dragenter", () => {
    console.log("Drag Enter has been triggered");
  });
  whiteBox.addEventListener("dragleave", () => {
    console.log("Drag leave has been triggered");
  });
  whiteBox.addEventListener("drop", (e) => {
    console.log("Drop has been triggered");
    e.target.append(imgBox);
  });
}
