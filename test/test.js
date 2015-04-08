import assert from 'power-assert';
import DateUTC from '../build/date-utc';

describe('DateUTC', () => {
  let t = new DateUTC();
  console.log(t._args);
  describe('new DateUTC', () => {
    it('new Date.toString() === new DateUTC.toString()', () => {
      let d1 = new Date().toString();
      let d2 = new DateUTC()._originDate.toString();
      assert(d1 === d2);
    });
  });

  describe('DateUTC.now()', () => {
    it('Date.now() - offset === DateUTC.now()', () => {
      let d1 = Date.now();
      let d2 = DateUTC.now();
      let offset = new Date().getTimezoneOffset() * 60 * 1000;
      assert(d1 - offset === d2);
    });
  });

  describe('.getHours()', () => {
    it('getHours', () => {
      let date = new Date(2016, 2, 9, 23);
      let dateUtc = new DateUTC(2016, 2, 9, 23);
      let offset = new Date().getTimezoneOffset() / 60;
      assert(date.getHours() + offset === dateUtc.getHours());
    });
  });
});
