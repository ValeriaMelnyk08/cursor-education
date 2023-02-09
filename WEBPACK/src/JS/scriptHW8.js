class Student{
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.Marks = [5, 4, 4, 5];
        this.Active = true;
    }
    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }

    get marks() {
        return this.Active ? this.Marks : null;
    }

    set marks(newMarks){
        if (this.Active) {
            this.Marks.push(newMarks);
        }
    
    }
    getAverageMark() {
        return this.Marks.reduce((a,b) => a + b, 0 ) / this.Marks.length    
    }

    dismiss() {
        this.Active = false;
    }
    recover() {
        this.Active = true;
    }

}

let newStudent = new Student ('Вищої Школи Психотерапії м.Одеса', '1', 'Остап Родоманський Бендер');
console.log(newStudent.getInfo());

console.log(newStudent.marks);
newStudent.marks = 5;

console.log(newStudent.getAverageMark());

newStudent.dismiss();
console.log(newStudent.marks);

newStudent.recover();
console.log(newStudent.marks);


export{Student};

