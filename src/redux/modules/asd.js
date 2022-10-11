let x = [
  { a: 123, b: 11111, c: "aaaa", d: "sssss" },
  { a: 1251513, b: 1333311, c: "awwwa", d: "ssgggg" },
  { a: 12444, b: 2222, c: "asbsd", d: "sddddd" },
];

const result = x.map((user, index) => {
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.a > 190,
  });
});
console.log(result);

// y = x.map((value, index, array) => {
//     if (((a = 123), (index = 1))) {
// const y = x.splice(1.2);
