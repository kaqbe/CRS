var b_p_h = document.getElementById('b_p_h').innerHTML;
var b_p_a = document.getElementById('b_p_a').innerHTML;
var b_p_h_v = document.getElementById('b_p_h_v');
var b_p_a_v = document.getElementById('b_p_a_v');
var s_t_h = Number(document.getElementById('s_t_h').innerHTML);
var s_t_a = Number(document.getElementById('s_t_a').innerHTML);
var s_t_h_v = document.getElementById('s_t_h_v');
var s_t_a_v = document.getElementById('s_t_a_v');
var s_o_h = Number(document.getElementById('s_o_h').innerHTML);
var s_o_a = Number(document.getElementById('s_o_a').innerHTML);
var s_o_h_v = document.getElementById('s_o_h_v');
var s_o_a_v = document.getElementById('s_o_a_v');
var c_h = Number(document.getElementById('c_h').innerHTML);
var c_a = Number(document.getElementById('c_a').innerHTML);
var c_h_v = document.getElementById('c_h_v');
var c_a_v = document.getElementById('c_a_v');
var o_h = Number(document.getElementById('o_h').innerHTML);
var o_a = Number(document.getElementById('o_a').innerHTML);
var o_h_v = document.getElementById('o_h_v');
var o_a_v = document.getElementById('o_a_v');
var f_h = Number(document.getElementById('f_h').innerHTML);
var f_a = Number(document.getElementById('f_a').innerHTML);
var f_h_v = document.getElementById('f_h_v');
var f_a_v = document.getElementById('f_a_v');
var y_c_h = Number(document.getElementById('y_c_h').innerHTML);
var y_c_a = Number(document.getElementById('y_c_a').innerHTML);
var y_c_h_v = document.getElementById('y_c_h_v');
var y_c_a_v = document.getElementById('y_c_a_v');
var r_c_h = Number(document.getElementById('r_c_h').innerHTML);
var r_c_a = Number(document.getElementById('r_c_a').innerHTML);
var r_c_h_v = document.getElementById('r_c_h_v');
var r_c_a_v = document.getElementById('r_c_a_v');


window.onload = function stats() {

    //POSIADANIE PIŁKI

    if (b_p_h > b_p_a) {
        b_p_h_v.style.backgroundColor = 'green';
    } else if (b_p_h == b_p_a) {
        b_p_h_v.style.backgroundColor = 'green';
        b_p_a_v.style.backgroundColor = 'green';
    }
    else {
        b_p_a_v.style.backgroundColor = 'green';
    }

    b_p_h_v.style.width = b_p_h;
    b_p_a_v.style.width = b_p_a;

    //STRZAŁY CELNE

    if (s_t_h > s_t_a) {
        s_t_h_v.style.backgroundColor = 'green';
    } else if (s_t_h == s_t_a) {
        s_t_h_v.style.backgroundColor = 'green';
        s_t_a_v.style.backgroundColor = 'green';
    }
    else {
        s_t_a_v.style.backgroundColor = 'green';
    }

    s_t_h_v.style.width = (s_t_h / (s_t_h + s_t_a)) * 100 + '%';
    s_t_a_v.style.width = (s_t_a / (s_t_h + s_t_a)) * 100 + '%';

    //STRZAŁY NIECELNE

    if (s_o_h > s_o_a) {
        s_o_h_v.style.backgroundColor = 'green';
    } else if (s_t_h == s_t_a) {
        s_o_h_v.style.backgroundColor = 'green';
        s_o_a_v.style.backgroundColor = 'green';
    }
    else {
        s_o_a_v.style.backgroundColor = 'green';
    }

    s_o_h_v.style.width = (s_o_h / (s_o_h + s_o_a)) * 100 + '%';
    s_o_a_v.style.width = (s_o_a / (s_o_h + s_o_a)) * 100 + '%';

    //RZUTY ROŻNE

    if (c_h > c_a) {
        c_h_v.style.backgroundColor = 'green';
    } else if (c_h == c_a) {
        c_h_v.style.backgroundColor = 'green';
        c_a_v.style.backgroundColor = 'green';
    }
    else {
        c_a_v.style.backgroundColor = 'green';
    }

    c_h_v.style.width = (c_h / (c_h + c_a)) * 100 + '%';
    c_a_v.style.width = (c_a / (c_h + c_a)) * 100 + '%';

    //SPALONE

    if (o_h > o_a) {
        o_h_v.style.backgroundColor = 'green';
    } else if (o_h == o_a) {
        o_h_v.style.backgroundColor = 'green';
        o_a_v.style.backgroundColor = 'green';
    }
    else {
        o_a_v.style.backgroundColor = 'green';
    }

    o_h_v.style.width = (o_h / (o_h + o_a)) * 100 + '%';
    o_a_v.style.width = (o_a / (o_h + o_a)) * 100 + '%';

    //FAULE

    if (f_h > f_a) {
        f_h_v.style.backgroundColor = 'green';
    } else if (f_h == f_a) {
        f_h_v.style.backgroundColor = 'green';
        f_a_v.style.backgroundColor = 'green';
    }
    else {
        f_a_v.style.backgroundColor = 'green';
    }

    f_h_v.style.width = (f_h / (f_h + f_a)) * 100 + '%';
    f_a_v.style.width = (f_a / (f_h + f_a)) * 100 + '%';

    //ŻÓŁTE KARTKI

    if (y_c_h > y_c_a) {
        y_c_h_v.style.backgroundColor = 'green';
    } else if (y_c_h == y_c_a) {
        y_c_h_v.style.backgroundColor = 'green';
        y_c_a_v.style.backgroundColor = 'green';
    }
    else {
        y_c_a_v.style.backgroundColor = 'green';
    }

    y_c_h_v.style.width = (y_c_h / (y_c_h + y_c_a)) * 100 + '%';
    y_c_a_v.style.width = (y_c_a / (y_c_h + y_c_a)) * 100 + '%';

    //CZERWONE KARTKI

    if (r_c_h > r_c_a) {
        r_c_h_v.style.backgroundColor = 'green';
    } else if (r_c_h == r_c_a) {
        r_c_h_v.style.backgroundColor = 'green';
        r_c_a_v.style.backgroundColor = 'green';
    }
    else {
        r_c_a_v.style.backgroundColor = 'green';
    }

    r_c_h_v.style.width = (r_c_h / (r_c_h + r_c_a)) * 100 + '%';
    r_c_a_v.style.width = (r_c_a / (r_c_h + r_c_a)) * 100 + '%';
}