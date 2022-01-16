const Manager = require('./Employee');

//
class Manager extends Employee {
    constructor(name = ''){
    //future:name,officNum,role...
      super(name);   
      this.offNum = offNum;
      this.role = "Manager";
    }
    getRole(){
        return this.role;
    }
    getoffNum(){
        return this.offNum;
    }
    
}
//possible method(return for display)