//const sum=require('./sum');// commonJs i.e module.export and require
//import sum from './sum';//es6 syntax i.e export and import
const button=document.createElement('button');
button.innerText='click me';
button.onclick=()=>{
    System.import('./image_viewer').then((module)=>{
        console.log(module);
        module.default();
    })
}
document.body.appendChild(button);
//import './image_viewer';
//console.log(sum(10,5));