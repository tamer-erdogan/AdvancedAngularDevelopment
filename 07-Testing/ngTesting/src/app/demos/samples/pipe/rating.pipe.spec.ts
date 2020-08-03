import { RatingPipe } from './rating.pipe';

// var p;

beforeEach(() => {
  //   p = new RatingPipe();
});

describe('RatingPipe', () => {
  it('creates an instance', () => {
    const p = new RatingPipe();
    expect(p).toBeTruthy();
  });

  it('returns ausgezeichnet when 2 is passed', () => {
    const p = new RatingPipe();
    expect(p.transform(2)).toEqual('ausgezeichnet');
  });

  it('throws an err when a negative value is passed', () => {
    const p = new RatingPipe();
    expect(() => {
      p.transform(-1);
    }).toThrowError('Invalid param');
  });
});
