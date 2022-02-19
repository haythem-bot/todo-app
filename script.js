 const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
const pendingTasksNumb = document.querySelector(".pendingTasks");



showTasks();

addBtn.onclick = () => { 
  let userEnteredValue = inputBox.value;
  if (userEnteredValue != '') {
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null) { 
      listArray = []; 
    } else {
      listArray = JSON.parse(getLocalStorageData);  
    }
    listArray.push(userEnteredValue); 
    localStorage.setItem("New Todo", JSON.stringify(listArray)); 
    }

  showTasks();
}

function showTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  pendingTasksNumb.textContent = listArray.length; 

  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-minus"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; 
  inputBox.value = ""; 
}


function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); 
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}


deleteAllBtn.onclick = () => {
  listArray = [];
  localStorage.setItem("New Todo", JSON.stringify(listArray)); 
  showTasks();
}
 