import _ from 'lodash';
import './styles.css';
import data from './csvdata.csv';

const component = () => {
let element = document.createElement('div');
element.innerHTML = _.join(['Webpack','fonts'],' ');

element.classList.add('hello');

console.log(data);

return element;
}

document.body.appendChild(component());