const grades = [54, 53, 24, 78, 65, 90, 87, 89, 67]
const passingGrades = grades.filter(grade => grade >= 70)
const averageGrades = passingGrades.reduce((sum, grade) => sum + grade,0) / passingGrades.length

console.log('All grades: ',grades)
console.log('Tha grades greater than 70 are:  ',passingGrades)
console.log('The average is: ',averageGrades)