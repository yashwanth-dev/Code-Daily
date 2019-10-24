import _ from 'lodash';
import printme from './print';

const component = () => {
let element = document.createElement('div');
element.innerHTML = _.join(['webpack','code','splitting'],'-');

let br = document.createElement('br');
element.appendChild(br);
let btn = document.createElement('button');
btn.innerHTML = "Click me!!";
btn.onclick = printme;
element.appendChild(btn);
return element;
}

document.body.appendChild(component());