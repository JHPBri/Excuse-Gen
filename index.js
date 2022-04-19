window.onload = function(){
    document.querySelector('#excuse').innerHTML = excuseGen();
}
 
function excuseGen() {
    
let whoObject = ['The dog','My grandma','His turtle','My bird'];
let actionObject = ['ate','peed','crushed','broke'];
let whatObject = ['my homework', 'the keys', 'the car'];
let whenObject = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let who = Math.floor(Math.random() * whoObject.length);
    let action = Math.floor(Math.random() * actionObject.length);
    let what = Math.floor(Math.random() * whatObject.length);
    let when = Math.floor(Math.random() * whenObject.length);
    


    return whoObject[who] + ' ' + actionObject[action] + ' ' + whatObject[what] + ' ' + whenObject[when]; 
}


