// Create Observables
import { Observable } from 'rxjs';
import { clearInterval } from 'timers';

//create
// Emit 'Hi' and 'Yashwanth'

// const observable$ = Observable.create((observer) => {
//     observer.next('Hi');
//     observer.next('Hello');
// })

// observable$.subscribe(val => console.log(val));

// Observables emitting even numbers
const evenobservalbe$ = Observable.create((observer) => {
    let value = 0;
    const interval = setInterval(() => {
        if (value % 2 == 0) {
            observer.next(value);
        }
        value++;
    }, 1000);
    return () => clearInterval(interval);
});

const evensubscribe = evenobservalbe$.subscribe(val => console.log(val));

setTimeout(() => {
    evensubscribe.unsubscribe();
}, 10000);