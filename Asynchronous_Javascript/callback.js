// 1. var data = getData();

// 2.
// getData(function (data) {
//     console.log(data);
// })

// 3.
// function getData(callback) {
//     $.get("example.php", function (response) {
//         callback(response);
//     })
// }

// 4.
function getData(callback) {
    $.get("example.php", callback);
}

/*
Callback examples:
window.onclick
setTimeout
setInterval
*/





