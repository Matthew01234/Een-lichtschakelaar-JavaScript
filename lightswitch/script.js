var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = '...';
document.body.appendChild(btn);

// schijf hier tussen je code
lamp = false
document.body.style.background = 'yellow'
btn.textContent = 'ON'
function lichtschakelaar(){
 if (lamp == false) {
     document.body.style.background = 'black'
     btn.textContent = 'OFF'
     lamp = true
     console.log('lamp staat uit ')
 }
 else { 
    document.body.style.background = 'yellow'
    btn.textContent = 'ON'
    lamp = false
    console.log('lamp staat aan ')
 }  

}
btn.onclick = lichtschakelaar 

// schijf hier tussen je code