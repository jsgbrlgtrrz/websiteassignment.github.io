const modal = document.getElementById('contactModal');

const btn = document.getElementById('contactUsBtn');

const closeBtn = document.getElementsByClassName('close')[0];


btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    modal.style.display = 

  
    modal.offsetHeight; 

   
    modal.style.display = 'flex'; 
});


closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; 
});


window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none'; 
    }
});
