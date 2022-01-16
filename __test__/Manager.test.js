const Trial = require('../lib/Manager.js');
test('tests jest function', () => {
  
    expect(Trial.name).toBe('Lernantino');
    expect(Trial.value).toEqual(expect.any(Number));
  });