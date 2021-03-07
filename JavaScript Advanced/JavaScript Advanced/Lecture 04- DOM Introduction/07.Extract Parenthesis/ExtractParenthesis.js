function extract(content) {
    let result=[];
    let text = document.getElementById(content);
    let splitedText = text.textContent.split(' ')
    alert(splitedText[4])
    for (let i = 0; i < splitedText.length; i++) {
        if (splitedText[i]=="(") {
            alert(splitedText[i])
            result.push(splitedText[i+1]);
        }
    }
    alert(result.join(';'))
}