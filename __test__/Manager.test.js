const Manager = require('../lib/Manager.js');
test('tests jest function', () => {
    person = new Manager();
    expect(Manager.name).toBe('Lernantino');
    expect(Manager.offNum).toEqual(expect.any(Nummber));
      
  });

test('gets the name, id, email, and role', () =>{
    //methods
    const person = new Employee('M');

    expect(person.getRole()).toHaveProperty('Manager');
    expect(person.getEmail()).toHaveProperty('xyz');
    expect(person.getId()).toEqual(expect.any(Number));
    expect(person.getName()).toHaveProperty('xyz');
    expect(person.getoffNum()).toEqual(expect.any(Number));
});