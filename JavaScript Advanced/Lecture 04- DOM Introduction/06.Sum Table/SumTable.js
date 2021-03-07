function sumTable() {
    let result = 0;
    const tds = document.getElementsByTagName('td');
    [...tds].forEach(e => {
        if (!isNaN(Number(e.textContent))) {
            result += Number(e.textContent);
        }
    });
    document.getElementById('sum').textContent = result.toString();
}