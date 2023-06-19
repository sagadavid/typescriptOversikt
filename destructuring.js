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
var person = {
    navnet: "dave",
    ettern: "saga",
    prefix: "someting",
};
function hilsen(_a) {
    var navnet = _a.navnet, ettern = _a.ettern, prefix = _a.prefix;
    return "".concat(prefix, " ").concat(ettern, " ").concat(navnet);
}
console.log(hilsen(person));
//destruction on array
var _a = [3, 4], p = _a[0], q = _a[1];
console.log(p, q);
