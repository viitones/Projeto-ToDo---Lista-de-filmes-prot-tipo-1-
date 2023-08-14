const input = document.querySelector("#inputAdd");
const buttonAdd = document.querySelector("#buttonAdd");
const generalList = document.querySelector(".generalList")


let myList = []

function takeInput(e){
    e.preventDefault();

    if(!input.value == ""){
        myList.push({
            item: input.value,
            done: false
        })
    }

    else{
        alert("Por favor, preencha o campo")
    }
    

    console.log(myList)

    
    addTask()
    
}


function addTask(){             //criando o html de cada item 
    let addItem = ""

    myList.forEach((e, i)=>{
        addItem = addItem + `
        
        <div class="list ${e.done && "done"}">
                <h3>${e.item}</h3>
                <div class="btns">
                    <img onclick="checked(${i})" src="assets/iconCheck.svg" alt="check"
                    ><img onclick="editItem(${i})" src="assets/iconEdit.svg" alt="iconEdit"
                    ><img onclick="deleteItem(${i})" src="assets/iconTrash.svg" alt="delete">
                </div>
            </div>
        
        `
})
    
    generalList.innerHTML = addItem


    localStorage.setItem("lista",(JSON.stringify(myList)))

    input.value = ""
    input.focus()
}


function checked(i){
    
    myList[i].done = !myList[i].done
    
    
    addTask()
}

function deleteItem(i){

    myList.splice(i, 1)

    addTask()
}

// function editItem(i){        //futura modal

//     myList.map((e, i)=>{
//         console.log(e.innerHTML)
//     })

// }





buttonAdd.addEventListener("click", takeInput)

function loadPage(){
    itemLS = localStorage.getItem("lista")

    if(itemLS){
        myList = JSON.parse(itemLS)
    }
    
    addTask()
}

loadPage()