function toggle() {
    const btn = document.getElementsByClassName("button")[0];
    const text = document.getElementById('extra');
    if (btn.textContent == "Less") {
        text.style = "display:None";
        btn.textContent = "More";
    }
    else {
        text.style = "display:block";
        btn.textContent = "Less";
    }
}