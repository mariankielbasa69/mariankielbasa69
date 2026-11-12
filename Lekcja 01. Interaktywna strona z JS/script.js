"use strict";

let counter = 0;

let items = ["Wojownik","Mag","Łucznik"]


function addPoint(){
    counter = counter + 1
    document.getElementById("counter-display").textContent = counter;
}

function reset(){
    counter = 0;
    document.getElementById("counter-display").textContent = counter;
}

function draw(){
    let index = Math.floor(Math.random()* items.length);
    document.getElementById("random-display").textContent = items[index];
}

// TODO: utwórz tablicę z elementami do losowania
// TODO: napisz funkcję drawItem, która losuje element z tablicy i wyświetla go
