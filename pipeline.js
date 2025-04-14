// 1/ Functional Pipeline Example

const calculateAverageScore = (person) => {
  const avgScore = person.score.reduce((acc, score) => acc + score, 0) / person.score.length;
  return { name: person.name, avgScore };
};
const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
const processData = pipe(
  (people) => people.filter(person => person.age >= 18), 
  (adults) => adults.map(calculateAverageScore), 
  (scores) => scores.sort((a, b) => b.avgScore - a.avgScore) 
);

// Example dataset
const data = [
  { id: 1, name: 'Alice', age: 22, score: [75, 80, 70] },
  { id: 2, name: 'Bob', age: 17, score: [60, 65, 70] },
  { id: 3, name: 'Charlie', age: 28, score: [85, 90, 95] }
];

// Using the pipeline to process the data
const result = processData(data);
console.log(result);
// Expected output: [
//   { name: 'Charlie', avgScore: 90 },
//   { name: 'Alice', avgScore: 75 }
// ]
  