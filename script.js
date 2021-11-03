var menu = document.getElementById('menu');
const mediaQueryPhone = window.matchMedia('(max-width: 600px)');
var h_in = document.getElementById('h_in');

function hide_menu() {

    if (mediaQueryPhone.matches) {

        menu.style.height = '0%';

    } else {

        menu.style.right = '-51%';
        menu.style.visibility = 'hidden';

    }
}

function show_menu() {

    if (mediaQueryPhone.matches) {

        if (menu.style.height == '80%') {
            hide_menu()
        } else {
            menu.style.height = '80%';
            menu.style.visibility = 'visible';
        }

    } else {

        menu.style.right = '0';
        menu.style.visibility = 'visible';
        menu.style.height = '100%';

    }
}