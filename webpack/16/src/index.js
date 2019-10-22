// import _ from 'lodash';
import {cube} from './math';

const component = () => {
    // let element = document.createElement('div');
    let element = document.createElement('pre');
    // element.innerHTML = _.join(['Webpack','Treeshaking'],' ');
    element.innerHTML = [
        'Hello Webpack',
        'e cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());