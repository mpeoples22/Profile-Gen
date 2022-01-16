const Employee = require('../lib/Employee.js');
test('tests jest function', () => {
  
    expect(Employee.name).toBe('Lernantino');
    expect(Employee.id).toEqual(expect.any(Number));
  });