function solve() {

   const section = document.querySelector('main section');
   document.getElementsByClassName('btn create')[0].addEventListener('click', (event)=>{
      const creator = document.getElementById('creator').value;
      document.getElementById('creator').value='';
      const category = document.getElementById('category').value;
      document.getElementById('category').value='';
      const title = document.getElementById('title').value;
      document.getElementById('title').value='';
      const content = document.getElementById('content').value;
      document.getElementById('content').value='';
      event.preventDefault()
      let el = document.createElement('article');
      let h1 = document.createElement('h1');
      h1.textContent = title;

      let pCa = document.createElement('p');
      pCa.textContent = "Category: ";
      let strongCa = document.createElement('strong');
      strongCa.textContent = category;
      pCa.appendChild(strongCa)

      let pCr = document.createElement('p');
      pCr.textContent = "Creater: ";
      let strongCr = document.createElement('strong');
      strongCr.textContent = creator;
      pCr.appendChild(strongCr)


      let text=document.createElement('p');
      text.textContent = content;

      let divBWreaper=document.createElement('div');
      let buttonDel=document.createElement('button');
      buttonDel.className="btn delete";
      buttonDel.textContent='Delete';
      buttonDel.addEventListener('click',(event)=>{
         buttonDel.remove()
      })
      let buttonArch=document.createElement('button');
      buttonArch.className="btn archive";
      buttonArch.textContent='Archive'
      divBWreaper.appendChild(buttonDel);
      divBWreaper.appendChild(buttonArch);
      divBWreaper.className="buttons"

      el.appendChild(h1);
      el.appendChild(pCa);
      el.appendChild(pCr);
      el.appendChild(text);
      el.appendChild(divBWreaper);
      section.appendChild(el)
   });
}