const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
//                   0           1        2       3        4           5
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];
//=====================Розділ студентів по парах=======================================================================================================

function getPairs( array ) {
    const Girls = [];
    Girls.push(array[2], array[3], array[5]);
    //          0          1         2    
    const Boys = [];
    Boys.push(array[0], array[1], array[4]); 
    const result = [];
    for (let i = 0; i < Girls.length; i++) { 
     //                       3  
        result.push([Girls[i], Boys[i]]);
    }        
    return result; 
}
console.log(getPairs(students));

//============================Теми проектів ===============================================================================================================================

function pairsTheme (themes, pairArray) {  
          let result = [];
          for (i = 0; i < pairArray.length; i++) {
            let pair = pairArray[i];
            
            result.push([`${pair[0]} і ${pair[1]}`, themes[i]  ])
            
          }  
          return result;
}

console.log(pairsTheme(themes, getPairs(students)));
//========================================Оцінки=======================================================================================================================
function getMarks (names, marks) {
  let result = [];
  for (i = 0; i < names.length; i++ ){
    result.push([names[i], marks[i]])
  }
  return result;
}
console.log(getMarks(marks,students));

//======================================Випадкова оцінка ===============================================================================================================================

function randomMarks (array) {
  let result = [];
  for (i = 0; i < array.length; i++){
    let random = Math.floor(Math.random() * (4)+ 1);
    result.push ([array[i][0], array[i][1], random ]);
  }
  return result;
}

console.log(randomMarks(pairsTheme(themes, getPairs(students))));
//













    