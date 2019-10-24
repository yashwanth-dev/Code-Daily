let modal = () => import('./somemodule.js');

btn.addeventlisterner('click', () => {
    modal().then(component => document.body.appendChild(component));
})

somemodule is being loaded only when the btn is clicked. // *module cache* if module is there in cache, it is returned from there or else it is requested. webpack runtime.


// Dynamic code splitting

const getTheme = (arg1) => import(`./src/components/${arg1}`)