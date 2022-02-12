// const fetch = require('node-fetch');
const fs = require('fs');
/*
console.log('Hello World!');

// callback 
setTimeout( () => {
    console.log('Waited 1 second');
},1000)

// nested setTimeouts 
// Christmas pattern / callback hell 
setTimeout( () => {
    console.log('3'); 
    setTimeout( () => {
        console.log('2');
        setTimeout( () => {
            console.log('1');
        }, 1000);
    }, 1000);
}, 1000
);
*/
// button event handler in browser Javascript 
// const btn; 
// btn.addEventListener('click', () => {});

// error first callback 
/*
fs.readFile('./test.txt', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
        console.error('ERROR');
        console.error(err);
    } else {
        console.error('GOT DATA');
        console.log(data);
    }
});
*/

/**** Promises */
/*
const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if(rand === 0){
        resolve();
    } else {
        reject();
    }
});

myPromise.then(() => console.log('Success'))
         .catch(() => console.log('Something went wrong'));

*/ 

// fs readFile with promises 
/*
fs.promises
    .readFile('./test2.txt', {encoding: 'utf-8'})
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
*/

// fetch with promises 
// npm install node-fetch@^2.6.6
/*
const fetch = require('node-fetch');
fetch('https://www.google.com')
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
*/

/*
const fetch = require('node-fetch');
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
*/

/*
const loadFile = async () => {
    const data = await fs.promises.readFile('./test.txt', {encoding: 'utf-8'}); 
    console.log(data);
};
loadFile();
*/

/*
const loadFile = async () => {
    try {
        const data = await fs.promises.readFile('./test.txt', {encoding: 'utf-8'}); 
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};
loadFile();
*/

// async fetch 
const callService = async(id) => {
    try{
        const fetch = require('node-fetch');
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};
callService('ditto');


