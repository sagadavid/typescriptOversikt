// let rect = {
//   x: 5,
//   y: 10,
//   width: 20,
//   height: 25,
// };
// //let { x, y, width: w, height: h } = rect;
// // console.log(x, y, w, h);
// // console.log(rect.x, rect.y, rect.width, rect.height);

// let { x, y, ...remaining } = rect;
// console.log(remaining);
// console.log(x, y);

let person = {
  navnet: "dave",
  ettern: "saga",
  prefix: "someting",
};

function hilsen({ navnet, ettern, prefix }) {
  return `${prefix} ${ettern} ${navnet}`;
}
console.log(hilsen(person));

//destruction on array
let [p, q] = [3, 4];
console.log(p, q);
