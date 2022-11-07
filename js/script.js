const addButton = document.querySelector('#liveToastBtn');
const inputText = document.querySelector('#task');
const toDoList = document.querySelector('#list');

const allLi = document.querySelectorAll("li")

const alertError = document.querySelector ('.error');
const alertSuccess = document.querySelector ('.success');

addButton.addEventListener('click', newElement());


function newElement() {
    if(inputText.value == '' || !inputText.value.trim()){
        $(alertError).toast('show')
    } else{
        const newLi = document.createElement('li');
        newLi.innerHTML = inputText.value
        $(alertSuccess).toast('show')
        toDoList.appendChild(newLi)
        const delBtn = document.createElement('span');
        delBtn.classList.add('close');
        const txt = document.createTextNode('\u00D7');
        delBtn.appendChild(txt)
        
        newLi.appendChild(delBtn);
         delBtn.addEventListener("click", delItem);
        
         function delItem() {
             let answer = window.confirm("Silmek istediğinize emin misiniz?");
             if (answer) {
                 newLi.remove();
             }
         }
        
         newLi.addEventListener("click", selectItem);
         function selectItem(){
             newLi.classList.toggle("checked");
         }
     }
     task.value = ""
}

allLi.forEach(e => {
    e.addEventListener("click", selectItem)
    function selectItem(){
        e.classList.toggle("checked")
    }
    let delBtn = document.createElement("span");
    delBtn.classList.add("close");
    let txt = document.createTextNode("\u00D7");
    delBtn.appendChild(txt)
    e.appendChild(delBtn)
    
    delBtn.addEventListener("click", delItem);    
    function delItem() {
        let answer = window.confirm("Silmek istediğinize emin misiniz?");
        if (answer) {
            e.remove();
        }
    }
})
