const students = [{
    name: "Tanya",
    course: 3,

    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }

    }, {
    name: "Victor",
    course: 4,

    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }

    }, {
    name: "Anton",
    course: 2,

    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];

    
     

function getAverageMark (student) {
  let marks = Object.entries(student.subjects);
  let total = 0;
  let count = 0;
  for (m of marks){
       let sum = m[1].forEach(function(item, index) {//forEach()виконує надану функцію один раз для кожного елемента масиву.
    total += item;
    count++;
});
  }
result = total / count;
return result.toFixed(2);

}
console.log(getAverageMark(students[0]));





