// Selecting the inputs and button
let fulName = document.querySelector("#text");
let roll = document.querySelector("#number");
let marks = document.querySelector("#marks");
let button = document.querySelector("#submit");
let tableBody = document.querySelector("#tablebody");

let serialNo = 1; // for serial number

// Move focus using Enter key
fulName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    roll.focus();
  }
});

roll.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    marks.focus();
  }
});

// Submit button logic
button.addEventListener("click", () => {
  let name = fulName.value.trim();
  let id = roll.value.trim();
  let mark = marks.value.trim();

  // warning for empty inputs
  if (name === "" || id === "" || mark === "") {
    alert("Please enter the details first");
    return;
  }

  // Assigning grade based on marks
  let grade;
  // Convert mark to number -- Number ( is used for coverting a string into a number)
  mark = Number(mark);
  // comparing the mark with the given conditions to assign the grade hand to hand
  if (mark >= 90) grade = "A";
  else if (mark >= 75) grade = "B";
  else if (mark >= 60) grade = "C";
  else if (mark >= 40) grade = "D";
  else grade = "Fail";

  // Create table row
  let row = document.createElement("tr");
  // Givig data to the table row
  row.innerHTML = `
    <td>${serialNo}</td>
    <td>${name}</td>
    <td>${id}</td>
    <td>${mark}</td>
    <td>${grade}</td>
  `;
  // Appending the row to the table body
  tableBody.appendChild(row);
  // Increasing the serial number
  serialNo++;

  // clearnig the input fields for the next entry
  fulName.value = "";
  roll.value = "";
  marks.value = "";
  // moving the focus back to the name input field...
  fulName.focus();
  // End of the button.addEventListener
});
