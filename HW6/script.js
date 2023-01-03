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

    //========================================Перша функція===============================================================================================================================
  
    function getSubjects (student) {
      let subjects = Object.keys(student.subjects);//повертає масив власних перерахованих імен
      let result = []; //нам потрібно вивести результат
      for (let word of subjects) { //Отримує значення з послідовності на кожній ітерації
        word = word.trim();// видаляє пробіли і повертає масив
      
        word = word.charAt(0).toUpperCase() + word.slice(1)// charAt повертає новий рядок із однією одиницею коду //slice() повертає поверхневу копію частини масиву в новий об’єкт масиву.
      result.push(word);// додає кілька елементів в масив і повертає нову довжину
    }
    return result;
  }
 console.log(getSubjects(students[0]));
     
//==============================================Друга функція===================================================================================================================================================================
 
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


//=============================================Третя функція=======================================================================================================================================================================

function getStudentInfo(student) {
  let infoStudent = {};
  infoStudent["Курс"] = student.course 
  infoStudent["Ім'я"] = student.name
  infoStudent["Середня оцінка"] = getAverageMark(student);
  return infoStudent ;
}


console.log(getStudentInfo(students[0]));
//==============================================Четверта функція===========================================================================
function getStudentsNames(studentsNames) {
  let result = [];
  for (value of studentsNames) {
    result.push(value.name);
  }
  return result.sort();
}

console.log(getStudentsNames(students));
//=================================================П'ята функція  =================================================================================================================
function getBestStudent(superStudent ) {
  let bestGrade = students[0];
  
  for (value of superStudent) {
    if (getAverageMark(value) > getAverageMark(bestGrade) ) {
      bestGrade = value;
    }
  }
  return bestGrade.name
} 

console.log(getBestStudent(students));
//===========================================Шоста функція ===================================================================================================================

function calculateWordLetters(string) {
  let divide = string.split("");
  const count = {};

  divide.forEach((word) => {
      count[word] = count[word] ? (count[word] + 1) : 1;
  });
  return count;
}
console.log(calculateWordLetters("test"));


