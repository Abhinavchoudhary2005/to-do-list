const search = document.getElementById("search")
const list = document.getElementById("list")
const Add = document.getElementById("Add")

Add.addEventListener("click", () => {
    if(search.value === ""){
        alert("You must write something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = search.value

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        
        li.appendChild(span)
        list.appendChild(li)    

        search.value = ""
        savedata()
    }
})

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        savedata();
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        savedata();
    }
})  

function savedata(){
    localStorage.setItem("data", list.innerHTML)
}


function showdata(){
    list.innerHTML = localStorage.getItem("data")
}

showdata()