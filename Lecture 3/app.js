class Student{
    constructor(id,names,slot,course){ 
        this.id = id;
        this.name =names;
        this.slot = slot;
        this.course = course;
    }


    learn(){
        console.log(this.name + "have student id" + this.id  + "Enrolled in" + this.slot + 
            "In Course" + this.course)

    }
    exam(){
        console.log(this.name + "have student id " + this.id  + "Enrolled in" + this.slot + 
            "In Course" + this.course)


    } 

}
let l1 = new Student("1551035,Muhammad Huzaifa,9 to 11,Dism")
l1.learn();

let l2 = new Student("1551035,Muhammad Huzaifa,9 to 11,Cpism")
l2.exam()






