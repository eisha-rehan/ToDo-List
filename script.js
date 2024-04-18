function addTask () {
  var input = document.getElementById("input");
  // get current text from input field
  var newTask = input.value;
  // only add new item to list if some text was entered
  if (newTask != "") {
    // create new HTML list item
    var item = document.createElement("li");
    // add HTML for buttons and new task text
    // Note, need to use '' because of "" in HTML
    item.innerHTML = '<input type="button" style="background-color:red" class="button-class" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
    '<input type="button" style="background-color:green" class="button-class" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
    newTask;
    // add new item as part of existing list
    document.getElementById("tasks").appendChild(item);  
    
     /* clearing input box */
    input.value = ' ';
    input.placeholder = "Enter New Task";
  }
}

// functionality of Tick Button
function markDone (item) { 
    item.className = 'finished';
}

// functionality of X button
function remove (item) {
  // remove item completely from document
    var check = item.className;
    if(check == 'finished')
    {
      item.remove();
    }  
}

// functionality of About button
function doAbout() {
  var about = document.getElementById("divabout");
  about.className = "red";
  about.innerHTML = "Created by Eisha Rehan :) ";
}

function clearAbout() {
  var about = document.getElementById("divabout");
  about.innerHTML = " ";
  about.className = " ";
}
