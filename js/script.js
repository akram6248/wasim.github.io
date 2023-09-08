let menu = document. quarySelector('#menu-icon');
let navbar = document. quarySelector('.navbar');

menu.oneclick =() =>{
    menu.classlist.toggle('bx-x');
    navbar.classlist.toggle('open');
}

const sr = ScrollrReveal ({
    distance: '40px' ,
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{deley:200, origin: 'left'});
sr.reveal('.navbar',{deley:400, origin: 'top'});
sr.reveal('.menu-btn',{deley:520, origin: 'right'});

sr.reveal('.home-text span',{deley:600, origin: 'top'});
sr.reveal('.home=text h1',{deley:680, origin: 'left'});
sr.reveal('.home=text p',{deley:750, origin: 'right'});
sr.reveal('.main-btn',{deley:860, origin: 'left'});

sr.reveal('.share',{deley:950, origin: 'bottom'});

sr.reveal('.home-img.webp',{deley:1000, origin: 'right'});