import _ from 'lodash';
import './styles.css';

const component = () => {
let element = document.createElement('div');
element.innerHTML = _.join(['Webpack','fonts'],' ');

element.classList.add('hello');

return element;
}

document.body.appendChild(component());