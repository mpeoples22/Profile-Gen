const Trial = require('../lib/Intern.js');
test('tests jest function', () => {
  
    expect(Trial.name).toBe('Lernantino');
    expect(Trial.value).toEqual(expect.any(Number));
  });