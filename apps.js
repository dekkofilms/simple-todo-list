// Header at the top
var heading = document.createElement('h1');
document.getElementsByTagName('h1');
heading.innerHTML = "Todo App";

//Form
var todoForm = document.createElement('form');
todoForm.setAttribute("id", "masterForm")

//UL
var unordered = document.createElement('ul');

// Input Creation
var input = document.createElement('input');
input.setAttribute("type", "text");
input.setAttribute("name", "todo");
input.setAttribute("id", "todoTask")
input.setAttribute("placeholder", "what do you need to do?")

// Submit Button Creation
var submit = document.createElement('button')
submit.setAttribute("type", "submit");
submit.setAttribute("id", "add_todo");
submit.innerHTML = "Add ToDo";

//Event Handler to add Todo's to List
submit.addEventListener('click', function (event) {
  event.preventDefault();
  var todoTask = document.getElementById("todoTask").value;

  if (todoTask) {
    var labelTask = document.createElement('label');
    var listItem = document.createElement('li');
    labelTask.innerHTML = todoTask;
    listItem.appendChild(labelTask);

    // Add delete button
    var xBtn = document.createElement('button');
    xBtn.setAttribute("class", "deleteBtn");
    xBtn.innerHTML = "x";
    xBtn.setAttribute("type", "button");
    xBtn.addEventListener('click', function () {
      this.parentNode.remove();
    })

    //Add edit button
    var editInput = document.createElement('input');
    editInput.setAttribute("type", "text");
    editInput.setAttribute("name", "editor");
    editInput.setAttribute("id", "editor");

    var editBtn = document.createElement('button');
    editBtn.setAttribute("class", "editBtn");
    editBtn.innerHTML = "edit";
    editBtn.setAttribute("type", "button");

    var pressed = false;
    editBtn.addEventListener('click', function () {
      if (!pressed) {
        //do first click
        var currentValue = this.previousSibling.previousSibling.textContent;
        editInput.setAttribute("value", currentValue);
        listItem.appendChild(editInput);
        editBtn.innerHTML = "submit"
        pressed = true;
      } else {
        //do second click
        var newValue = document.getElementById("editor").value
        this.previousSibling.previousSibling.innerText = newValue;
        listItem.removeChild(editInput);

        pressed = false;
        editBtn.innerHTML = "edit"
      }
    });




    listItem.appendChild(xBtn);
    listItem.appendChild(editBtn);

    unordered.appendChild(listItem);

    //Resets the form
    document.getElementById("masterForm").reset();
  } else {
    //Checks to see if the input is empty
    window.alert("Please Enter a Task");
  }
});









//Appending to HTML
document.body.appendChild(heading);
document.body.appendChild(todoForm);
todoForm.appendChild(input);

todoForm.appendChild(unordered);

todoForm.appendChild(submit);
