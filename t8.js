let searchField = document.getElementById("search");
searchField.addEventListener("keyup",()=>{
    let searchValue = searchField.value.trim();
    console.log(searchValue);
    let list = document.getElementsByClassName("title");
    for(let i=0; i<list.length;i++){
        let li = list[i];
        if(li.textContent.trim().indexOf(searchValue)==-1){
           li.style.display="none";
        }
        else{
            li.style.display='';
        }
    }
})