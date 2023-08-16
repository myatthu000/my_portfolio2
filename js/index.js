let menu_btn = document.getElementById("menu-btn");
let float_menu = document.getElementById("float-menu");
let effect_layer = document.getElementById("bg-blur-effect");
let body = document.body;
let main = document.getElementById('main');

let bt_container = document.getElementsByClassName('body-text-container');
let p_text_container = document.querySelectorAll('.body-text-container p');

let p_text_title = document.querySelectorAll('.body-text-title');
let p_text_description = document.querySelectorAll('.body-text-description');

let project_name = document.getElementsByClassName("project-name");
let project_link = document.getElementsByClassName("project-link");
let footer_nav_a = document.querySelectorAll(".footer-navbar a");

let navbar_section = document.body.getElementsByClassName('.navbar-section');



// float_menu.classList.toggle('animate__zoomIn')
menu_btn.addEventListener('click',(event)=>{
    // console.log('->',event)
    float_menu.classList.toggle('d-none')
    if(!float_menu.classList.contains('d-none')){
        float_menu.classList.remove('animate__zoomOut');
        float_menu.classList.add('animate__zoomIn');
    }else {
        float_menu.classList.remove('animate__zoomIn');
        float_menu.classList.add('animate__zoomOut');
    }
    let ft = !float_menu.classList.contains('d-none');
    i_tag_change(ft)
    // // console.log('->',!float_menu.classList.contains('d-none'))
    effect_layer.classList.toggle('d-none')

})

// let ft = 0;
function i_tag_change(ft){
    if(ft){
        menu_btn.innerHTML = `<i class="feather feather-x"></i>`;
    }else {
        menu_btn.innerHTML = `<i class="feather feather-menu"></i>`;
    }
    // console.log('change',ft)
}

/*------------------ Dark Mode start -----------------*/

let on_off;

let darkMode_btn = document.getElementById("darkMode_btn");
function g_item(){
    return localStorage.getItem('dark-mode');
}

if (g_item() !== null){
    body.classList.add('dark-body');
    main.classList.add('dark-main');
    // p_text_title.style.setProperty('color','white');
    // p_text_description.style.setProperty('color','white');
    on_off = body.classList.contains('dark-body');
    // console.log(on_off)
    darkModeSetIcon(on_off)
    for(let i = 0;i<project_name.length;i++){
        project_name[i].style.setProperty('color','white')
        project_link[i].style.setProperty('color','white')
    }
    for(let i=0;i<footer_nav_a.length;i++){
        footer_nav_a[i].style.setProperty('color',`var(--text-color-2)`)
    }
}else {
    null;
}

darkMode_btn.addEventListener('click',function () {
    // console.log('work')
    setStorage(g_item())
    // console.log('localstorage',g_item())
    if (g_item() !== null){
        body.classList.add('dark-body');
        main.classList.add('dark-main');
        // p_text_title.style.setProperty('color','white');
        // p_text_description.style.setProperty('color','white');

        on_off = body.classList.contains('dark-body');
        // // console.log(on_off)
        darkModeSetIcon(on_off)
        for(let i = 0;i<project_name.length;i++){
            project_name[i].style.setProperty('color','white')
            project_link[i].style.setProperty('color','white')
        }
        for(let i=0;i<footer_nav_a.length;i++){
            footer_nav_a[i].style.setProperty('color',`var(--text-color-2)`)
        }

    }else {
        body.classList.remove('dark-body');
        main.classList.remove('dark-main');
        // p_text_title.style.removeProperty('color');
        // p_text_description.style.removeProperty('color');
        for(let i = 0;i<project_name.length;i++){
            project_name[i].style.removeProperty('color')
            project_link[i].style.removeProperty('color')
        }
        for(let i=0;i<footer_nav_a.length;i++){
            footer_nav_a[i].style.removeProperty('color')
        }
    }

    on_off = body.classList.contains('dark-body');
    darkModeSetIcon(on_off)

})

function setStorage(getItemm) {
    if (getItemm === null){
        localStorage.setItem('dark-mode','on')
    }else {
        localStorage.removeItem('dark-mode')
    }
}

function darkModeSetIcon(of) {
    if(of){
        darkMode_btn.innerHTML = `<i class="feather feather-moon text-primary"></i>`;
    }else {
        darkMode_btn.innerHTML = `<i class="feather feather-sun text-warning"></i>`;
    }
}

/*------------------ Dark Mode end   -----------------*/


// Get the current page URL
let currentPage = window.location.href;

// Get all navigation links
let navLinks = document.querySelectorAll('.nav-link-cus');

// Loop through the links and add the "active" class to the current page's link
navLinks.forEach(function(link) {
    if (link.href === currentPage) {
        link.classList.add('active');
        // console.log(link)
    }

});

let client_width = document.body.clientWidth;
if (currentPage === 'http://localhost:63342/Portfolio2/home2/AboutMe.html' && client_width >= 958){
    width_change_add()
}

window.addEventListener('resize',(currentPage)=>{
    // 958
    // console.log('ee',document.body.clientWidth)
    // width_change(currentPage)
    if (currentPage === 'http://localhost:63342/Portfolio2/home2/AboutMe.html' && client_width >= 958){
        width_change_add()
    }else if(currentPage === 'http://localhost:63342/Portfolio2/home2/AboutMe.html' && client_width <= 958){
        width_change_remove()
    }
})

function width_change_add() {
    // main.style.setProperty('height',"100vh");
}

function width_change_remove() {
    // main.style.removeProperty('height');
}