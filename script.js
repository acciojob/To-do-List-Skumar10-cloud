//your code here
var todoValue = document.getElementById("newTodoInput");
var btn = document.getElementById("addTodoBtn");
var ol = document.getElementById("todoList");//to assign li to ol

function addTodo() //use function because on add todo page isn't working
 {
	if(todoValue.value){
	// we need to create a li
	var li = document.createElement('li');
	li.textContent = todoValue.value;
	ol.appendChild(li);//relatable to 4th row of js
	todoValue.value = "";
	}
}

btn.addEventListener('click',addTodo); //whenever perform this click then This gona call addTodo
