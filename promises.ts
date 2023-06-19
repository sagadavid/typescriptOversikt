// //callback
// function fetchData(callback) {
//     setTimeout(function() {
//       const data = 'Some data';
//       callback(data);
//     }, 1000);
//   }

//   function processData(data) {
//     console.log('Processed data:', data);
//   }

//   fetchData(processData);

//promise
function fetchData(callback) {
  setTimeout(function () {
    const data = "Some data";
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log("Processed data:", data);
}

fetchData(processData);

/* 
Promises offer additional benefits over callbacks, such as chaining multiple asynchronous operations, error handling through the catch method, and better readability with a more linear flow of code.
It's worth noting that promises can also be used with the async/await syntax, which provides a more concise and synchronous-like way of writing asynchronous code.
*/
