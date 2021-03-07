function attachGradientEvents() {
    const gradient=document.getElementById('gradient').addEventListener('mousemove',(event)=>{
        console.log(event);
    });
}