//import { of } from 'rxjs';
//import { from } from 'rxjs';
import { fromEvent } from 'rxjs';


// of operator
// of(1, true, [1, 2], "String")
//     .subscribe(val => console.log(val));

//from operator
var books = [{ author: "autor-1", title: "title-1" },
{ author: "autor-2", title: "title-2" },
{ author: "autor-3", title: "title-3" },
{ author: "autor-4", title: "title-4" },
{ author: "autor-5", title: "title-5" }];

// from(books)
//     .subscribe(book => console.log(book.title));
let btn = document.getElementById('display-readers');
let readers_list_display_el = document.getElementById('readers-list');
fromEvent(btn, 'click')
    .subscribe(_event => {
        books.forEach(book => {
            readers_list_display_el.innerHTML += book.author + '<br>';
        });
    });