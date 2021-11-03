var menu = document.getElementById('menu');


function hide_menu() {
    menu.style.right = '-51%';
    menu.style.visibility = 'hidden';
}

function show_menu() {
    menu.style.right = '0';
    menu.style.visibility = 'visible';
}