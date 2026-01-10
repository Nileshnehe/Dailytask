let btn = document.querySelector('button');
let task = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener('click', function(){
    let item = document.createElement('li')
    item.innerText = task.value
    ul.appendChild(item)

    let delBtn = document.createElement('button')
    delBtn.innerText = 'delete'
    delBtn.classList.add('delete')

    item.appendChild(delBtn)

    console.log(task.value);
    task.value=""
    
})

ul.addEventListener('click', function(event){
    
    if(event.target.nodeName == 'BUTTON'){
        let listItem = event.target.parentElement;
        console.log(listItem)
        listItem.remove();
        
    }
})


// let delBtns = document.querySelectorAll('.delete')
// for (delBtn of delBtns) {
//     delBtn.addEventListener('click', function(){
//         let par = delBtn.parentElement;
//         console.log(par);
//         par.remove();
        
//     })
// }