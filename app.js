let inputBox = document.getElementById("inputBox");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");

addBtn.onclick = (e) => {
  event.preventDefault();
  let Div = document.createElement("div");
  Div.classList.add("tododiv");
  todoList.append(Div);

  let todoText = inputBox.value;
  let Li = document.createElement("li");
  Li.classList.add("todoLi");
  Li.innerText = todoText;
  Div.append(Li);

  let completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.classList.add("completed-Btn");
  Div.append(completedBtn);

  // let editBtn = document.createElement("button");
  // editBtn.innerHTML = '<i class="far fa-edit"></i>';
  // editBtn.classList.add("edit-Btn");
  // Div.append(editBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.classList.add("delete-Btn");
  Div.append(deleteBtn);

  inputBox.value = "";

  deleteBtn.onclick = (e)=> {
    Div.remove();
  };

  completedBtn.onclick = (e)=> {
    Div.classList.toggle('completed');
  };
  
  
};
