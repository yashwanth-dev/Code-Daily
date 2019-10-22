import _ from 'lodash';
import Icon from './icon.png';
import './styles.css';

const component = () => {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Webpack','Images'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());