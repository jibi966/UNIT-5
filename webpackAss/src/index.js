import "./index.css";
import link from "./logo.png";

let img = document.createElement("img");
img.src = link;
document.getElementById("logo").append(img);

let notesArr = JSON.parse(localStorage.getItem("notes")) || [];
showNotes(notesArr);

document.getElementById("myBtn").addEventListener("click", () => {
  let note = document.getElementById("myTxt").value;
  let obj = {
    task: note,
  };
  notesArr.push(obj);
  document.getElementById("myTxt").value = "";
  localStorage.setItem("notes", JSON.stringify(notesArr));
  showNotes(notesArr);
});

function showNotes(arr) {
  document.getElementById("notes").innerHTML = "";
  if (arr.length === 0) {
    let p = document.createElement("h3");
    p.innerText = "Please provide a note";
    document.getElementById("notes").append(p);
  } else {
    arr.map((elem, index) => {
      let mainDiv = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.innerText = index + 1 + ":" + " ";
      let p = document.createElement("h3");
      p.innerText = elem.task;
      let dltBtn = document.createElement("button");
      dltBtn.innerText = "Delete";
      dltBtn.addEventListener("click", function () {
        deleteNotes(index);
      });
      mainDiv.append(h3, p);
      document.getElementById("notes").append(mainDiv, dltBtn);
    });
  }
}

function deleteNotes(index) {
  notesArr.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesArr));
  showNotes(notesArr);
}
