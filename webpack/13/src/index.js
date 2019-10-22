import _ from 'lodash';

const component = () => {
    let element = document.createElement('div');
    element.innerHTML = _.join(['webpack','lazy loading'],'-');

    let br = document.createElement('br');
    let btn = document.createElement('button');
    btn.innerHTML = "click me!";
    // btn.onclick = printme;
    btn.onclick = e => import(/*webpackChunkName: "print"*/ './print').then(module => {
        const print = module.default;
        print();
    })

    element.appendChild(br);
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());