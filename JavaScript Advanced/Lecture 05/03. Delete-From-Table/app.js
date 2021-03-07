function deleteByEmail() {
    const emailInput=document.getElementsByTagName('input')[0].value;
    const result=document.getElementById('result');
    const table=Array.from(document.querySelectorAll("tbody tr"))
    for (const row of table) {
        if(row.children[1].textContent==emailInput){
            row.remove();
            result.textContent='Deleted.'
        }
        else{
            result.textContent='Not found.'
        }
    }
}