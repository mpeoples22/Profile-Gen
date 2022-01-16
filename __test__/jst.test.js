const Trial = require('../lib/jst.js');
test('tests jest function', () => {
  
    expect(Trial.name).toBe('Lernantino');
    expect(Trial.value).toEqual(expect.any(Number));
  });