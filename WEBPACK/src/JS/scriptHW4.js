const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
//                   0           1        2       3        4           5
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];


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

