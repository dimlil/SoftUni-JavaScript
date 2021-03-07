function solution() {
    const [gifts,sent,discard]=document.querySelectorAll('section ul');
    const input=document.querySelector('input');
    document.querySelector('button').addEventListener('click',addGift);

    function addGift(){
        const name=input.value;
        input.value='';
        const element=e('li',name,'gift')
        const sentButton=e('button', 'Send', 'sentButton')
        const discardButton=e('button', 'Discard', 'discardButton')
        element.appendChild(sentButton);
        element.appendChild(discardButton);

        gifts.appendChild(element);
    }
    function sentGift(){

    }
    function discardGift(){

    }
    function sorddGift(){

    }
    function e(type,content,className) {
        const result=document.createElement(type);
        result.textContent=content;
        if (className) {
            result.className=className;
        }
        return result;
    }
}