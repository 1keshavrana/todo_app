let input = document.querySelector("input");
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click',()=>{ 
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    li.classList.add('heading');
    ul.classList.add('del');

    let delBtn = document.createElement('button');
    delBtn.innerText = 'delete';
    delBtn.classList.add("del");
    li.appendChild(delBtn);
}
)


ul.addEventListener("click",function(event){
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})


// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns){
//     delBtn.addEventListener('click',function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }