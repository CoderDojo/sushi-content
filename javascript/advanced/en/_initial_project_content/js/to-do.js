// Create a list of to-do items
var toDoItems = [];

// This function creates a new to-do list item
function newToDoItem(itemText, completed) {
  console.log("New item created: "+itemText+"  Completed state: "+completed);
}

// This function adds an item to the to-do list
function addToDoItem() {
  console.log("Item added!");
}

// This function cleans up all the completed to-do items
function clearCompletedToDoItems() {
  console.log("Cleaning up completed items");
}

// This function resets the to-do list to blank
function emptyList() {
  console.log("Emptying to-do list");
}

// This function loads the to-do list when the page loads
function loadList() {
  console.log("Loaded to-do list");
}

// This funciton gets the HTML code to display a to-do item
function getToDoItemHTML(toDoItem) {
  console.log("Getting HTML of "+toDoItem);
}
