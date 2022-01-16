const Employee = require('../lib/Employee.js');
test('creates a new Employee', () => {
    //constructor
    const person = new Employee('joe')
    //person = new Employee('joe');
    expect(Employee.name).toBe('joe');
    expect(Employee.email).toEqual(expect.stringContaining(person.email.toString()));
    expect(Employee.id).toEqual(expect.any(Number));
    
  });

  test('gets the name, id, email, and role', () =>{
      //methods
      const person = new Employee('M');

      expect(person.getId()).toEqual(expect.any(Number));
      expect(person.getEmail()).toEqual(expect.stringContaining(person.email.toString()));
      expect(person.getName()).toHaveProperty('M');
      expect(person.getRole()).toHaveProperty('Employee');
  });
