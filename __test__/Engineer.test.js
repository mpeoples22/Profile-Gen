const Engineer = require('../lib/Engineer.js');
test('tests jest function', () => {
  
    expect(Engineer.name).toBe('Lernantino');
    expect(Engineer.id).toEqual(expect.any(Number));
  });