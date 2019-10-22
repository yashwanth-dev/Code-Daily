import _ from 'lodash';

const component = () => {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Webpack', 'code splitting', 'entry'],'-');

    return element;
}

document.body.appendChild(component());
