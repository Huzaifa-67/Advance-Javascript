class Employees {
    constructor(id,name,salary,slot){
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.slot=slot;
        alert("base costructor");
        
    }
    Jobtitle(location){
         console.log(
    "My ID is " + this.id + 
    ", My name is " + this.name + 
    ", income is " + this.salary + 
    ", I work in " + this.slot + 
    ", works as a " + this.role + 
    ", and works " + location + "."
         );
    }
}
    class Developer extends Employees {
        constructor(id,name,salary,slot,role) {
            super(id,name,salary,slot);
            this.role=role;
            
        }
    }
    let a = new Developer ("1","Huzaifa","50000","9-5","Backend Developer")
    a.Jobtitle ("onsite")


