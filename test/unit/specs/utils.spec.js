import {getCurrentViewByYearMonth} from '../../../src/utils/index'
import moment from 'moment'
import {assert} from 'chai'
describe('getCurrentViewByYearMonth', () => {
  it('has 42 length', () => {
    assert.equal(getCurrentViewByYearMonth(moment()).length, 6)
    assert.equal(getCurrentViewByYearMonth(moment())[0].length, 7)
  })
  it('index 0 is 1', () => {
    assert.equal(getCurrentViewByYearMonth(moment())[0][0].date(), 1)
    assert.equal(getCurrentViewByYearMonth(moment())[0][1].date(), 2)
    assert.equal(getCurrentViewByYearMonth(moment())[0][2].date(), 3)
  })
})
