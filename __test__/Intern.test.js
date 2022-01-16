const Intern = require('../lib/Intern.js');
test('tests jest function', () => {
  
    expect(Intern.name).toBe('Lernantino');
    expect(Intern.value).toEqual(expect.any(Number));
  });