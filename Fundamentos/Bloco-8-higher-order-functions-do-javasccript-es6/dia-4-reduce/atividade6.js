const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const ex6 = () =>
  students.map((student, i) => ({
    name: student,
    nota: grades[i].reduce((acc, nota) => {
        return acc + nota;
      }) / grades[i].length,
  }));

console.log(ex6());
// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];
