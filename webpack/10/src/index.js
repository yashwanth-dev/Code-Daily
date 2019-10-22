import _ from 'lodash';
import printMe from './print';
const component = () => {
    let element = document.createElement('div');
element.innerHTML = _.join(['Webpack', 'HTMLwebpackplugin', 'CleanWebpackPlugin'],' ');
let btn = document.createElement('button');
btn.onclick = printMe;


    return element;
}

document.body.appendChild(component());