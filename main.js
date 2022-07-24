const menu = document.querySelector('.menu');
const toggle = document.getElementById('toggle');


toggle.addEventListener('click', () =>{
    if(!toggle.classList.contains('active')){
        menu.style.top = '0';
        toggle.classList.add('active');
        
    } else {
        menu.style.top = '-1000%';
        toggle.classList.remove('active');
    }
    
});


