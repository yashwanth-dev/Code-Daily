// import _ from 'lodash';
// import printme from './print';

const component = () => {

return import(/*webpackChunkName:"lodash"*/ 'lodash').then(({default:_}) => {

    let element = document.createElement('div');
element.innerHTML = _.join(['webpack','code','splitting'],'-');
return element;
});
}

component().then(cmp => {document.body.appendChild(cmp)});

