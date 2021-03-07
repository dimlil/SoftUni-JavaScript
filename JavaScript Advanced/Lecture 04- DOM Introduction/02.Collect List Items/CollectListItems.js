function extractText() {
    const liElements = document.getElementsByTagName('li');
    const text = [...liElements].map(x => { return x.textContent })
    document.getElementById("result").value=text.join("\n");
}