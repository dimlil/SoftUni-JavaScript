function addItem() {
    let text = document.getElementById('newItemText').value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text))
    let remove=document.createElement("a");
    let linkText=document.createTextNode("[Delete]");
    remove.appendChild(linkText);
    remove.href="#";
    remove.addEventListener('click',()=>{
        li.remove();
    })
    document.getElementById('items').appendChild(li);
    document.getElementById('newItemText').value='';
}