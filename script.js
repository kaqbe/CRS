

function show_menu(){

    var menu = document.getElementById('menu');
var przycisk_menu = document.getElementById('przycisk_menu');
var menu_pc = document.getElementById('menu_pc');
var logo = document.getElementById('logo');
var menu_tel = document.getElementById('menu_tel');

        menu_pc.style.display = 'block';
        przycisk_menu.setAttribute("onclick", "hide_menu()");
        menu_tel.style.width = '100%'
        menu_tel.style.textAlign = 'center';
        menu_tel.style.margin = '0';
        menu.style.transition = '2s';
        menu.style.height = "50%";
        logo.style.position = 'absolute';
        logo.style.left = '40%';
        logo.style.margin = '0';
        logo.style.marginLeft = '0';
        
}

function hide_menu() {

    var menu = document.getElementById('menu');
var przycisk_menu = document.getElementById('przycisk_menu');
var menu_pc = document.getElementById('menu_pc');

    menu_pc.style.display = 'none';
    menu.style.height = "10vh";
    logo.style.position = 'static';
    logo.style.marginLeft = '1vh';
    menu_tel.style.width = 'auto'
    menu_tel.style.textAlign = 'auto';
    menu_tel.style.marginRight = '4vw';
    przycisk_menu.setAttribute("onclick", "show_menu()");

}
