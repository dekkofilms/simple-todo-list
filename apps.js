$( document ).ready(function() {
  //Heading
  var heading = $('<h1>').html('Todo App');

  //Form
  var todoForm = $('<form>').attr('id', 'masterForm');

  //UL
  var unordered = $('<ul>')

  // Input Creation
  var input = $('<input>').attr({
                                  'id' : 'todoTask',
                                  'type' : 'text',
                                  'name' : 'todo',
                                  'placeholder' : 'what do you need to do?'
                                })

  // Submit Button Creation
  var submit = $('<button>').html('Add ToDo');
  submit.attr({
                'type' : 'submit',
                'id' : 'add_todo'
              })

  //Event Handler to add Todo's to List
  submit.on('click', function (event) {
    event.preventDefault();
    var todoTask = $('#todoTask').val();

    if (todoTask) {
      var labelTask = $('<label>').html(todoTask);
      var listItem = $('<li>')

      listItem.append(labelTask);

      // Add delete button
      var xBtn = $('<button>').html('x')
      xBtn.attr({
                  'class' : 'deleteBtn',
                  'type' : 'button'
                })

      xBtn.on('click', function () {
        this.parentNode.remove();
      })

      //Add edit button
      var editInput = $('<input>').attr({
                                          'type' : 'text',
                                          'name' : 'editor',
                                          'id' : 'editor'
                                        })

      var editBtn = $('<button>').html('edit')
      editBtn.attr({
                    'class' : 'editBtn',
                    'type' : 'button'
                  })

      var pressed = false;
      editBtn.on('click', function () {
        if (!pressed) {
          //do first click
          var currentValue = $(this).prev().prev().text();
          editInput.attr("value", currentValue);
          listItem.append(editInput);
          editBtn.html('submit');
          pressed = true;
        } else {
          //do second click
          var newValue = $('#editor').val();
          $(this).prev().prev().text(newValue);
          editInput.remove();

          pressed = false;
          editBtn.html('edit')
        }
      });




      listItem.append(xBtn);
      listItem.append(editBtn);

      unordered.append(listItem);

      //Resets the form
      document.getElementById("masterForm").reset();
    } else {
      //Checks to see if the input is empty
      window.alert("Please Enter a Task");
    }
  });

  //Appending to HTML
  $('body').append(heading);
  $('body').append(todoForm);
  todoForm.append(input);
  todoForm.append(unordered);
  todoForm.append(submit);
});
