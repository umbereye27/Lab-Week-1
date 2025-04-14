// 1. Write a function uniqueElements(arr1, arr2) that takes two arrays and returns a new array with unique elements from both arrays, maintaining the original order 
function uniqueElements(arr1, arr2) {
    const seen = new Set([...arr1, ...arr2]);
    console.log(seen); return [...seen];
}
console.log(uniqueElements([1, 2, 3, 3], [3, 4, 5]));

// 2.Create a function that performs a JOIN operation on two arrays of objects, based on a common property, and returns a new array of merged objects.
const employees = [
    { id: 1, name: 'John', department: 'IT' },
    { id: 2, name: 'Jane', department: 'HR' },
    { id: 3, name: 'Doe', department: 'IT' }
    ];
    const salaries = [
    { id: 1, salary: 50000 },
    { id: 2, salary: 60000 },
    { id: 4, salary: 55000 }
    ];
    
    const sqlJoin = (employees, salaries) => {
        return employees.map(emp => {
            const salaryInfo = salaries.find(sal => sal.id === emp.id);
            
            return salaryInfo ? { ...emp, salary: salaryInfo.salary } : emp;
        }).filter(emp => emp.salary !== undefined);
    };
    
    const result = sqlJoin(employees, salaries);
    console.log(result);
    // Expected output: [
    //   { id: 1, name: 'John', department: 'IT', salary: 50000 },
    //   { id: 2, name: 'Jane', department: 'HR', salary: 60000 }
    // ]