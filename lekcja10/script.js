"use strict";

let avatar = document.getElementById("avatar")
let name = document.getElementById('name')
let description = document.getElementById('description')
let toggleBtn = document.getElementById('toggle-btn')


toggleBtn.addEventListener("click", function(){

    let isHero = document.body.classList.contains('hero')

    if(isHero){                                                                 
        document.body.classList.replace("hero", "villain")
    name.textContent = 'Shadow Villain';
    description.textContent = 'Mode: Villain';
    avatar.src = 'https://api.dicebear.com/9.x/adventurer/svg?seed=marek';
    avatar.style.borderColor = '#ff9900';
    toggleBtn.textContent = 'Zmień na Hero';
 }else{
    document.body.classList.replace("villain", "hero")
    name.textContent = 'Felix Hero';
    description.textContent = 'Mode: Hero';
    avatar.src = 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/913914766_4905758852991554_8120312409887305345_n.avif?stp=dst-jpg_tt6&cstp=mx999x999&ctp=s999x999&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kbYtH6SuIecQ7kNvwHbOD5u&_nc_oc=AdpMbnWKSwxq4UjMOFql0MnPMsHCBpU8Lz35FSRvZ09Pk2uhARcL38DISJdMc4o87Do&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=mpl-Jh3zfJXlM2f9se2H4w&_nc_ss=7b289&oh=00_AQTD9Rctx9Q2EyYoW0jkStu0JYSzG7eod8pJ5Uh3Q0BA4g&oe=6B052B4B';
    avatar.style.borderColor = '#1500ff';
    toggleBtn.textContent = 'Zmień na Villain';
 }


});
