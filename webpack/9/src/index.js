import _ from 'lodash';
import PrintFn from './print';

const component = () => {

let element = document.createElement('div');
const btn = document.createElement('button');
btn.innerHTML = 'click me and check the console';
element.innerHTML = _.join(['Webpack', 'Output Management'], ' ');

btn.onClick = PrintFn;
element.appendChild(btn);

return element;

}

document.body.appendChild(component());