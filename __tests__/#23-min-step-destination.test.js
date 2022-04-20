const { minStep } = require('../challenges/#23-min-step-destination');

describe('minStep', () => {
  const f = false;
  const t = true;
  it('should return the lowest num of steps to get to end with walls in the way', () => {
    const maze = [
      [f, f, f, f],
      [t, t, f, t],
      [f, f, f, f],
      [f, f, f, f],
    ];
    let start = [3, 0];
    let end = [0, 0];
    expect(minStep(maze, start, end)).toEqual(7);
    end = [0, 3];
    expect(minStep(maze, start, end)).toEqual(6);
    end = [3, 3];
    expect(minStep(maze, start, end)).toEqual(3);
  });
  it('should return null if there is no way to the end', () => {
    const maze = [
      [f, f, f, f],
      [t, t, t, t],
      [f, f, f, f],
      [f, f, f, f],
    ];
    let start = [3, 0];
    let end = [0, 0];
    expect(minStep(maze, start, end)).toEqual(null);
  });
});
