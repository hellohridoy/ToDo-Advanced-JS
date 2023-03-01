//Seclector

const todoInput = document.querySelector('.todo-input');
const todoButto = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener

todoButto.addEventListener('click',addTodo)


//Functions
function addTodo(event){
    //console.log("Hello");
    //prevent from form submitting
    event.preventDefault();
    //todo div create
    const todoDiv = document.createElement("div");
    //todo class create
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Check mark Button

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);



    // Trash Button

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);


    todoList.appendChild(todoDiv);

    //Clear input value
    todoInput.value = "";

}