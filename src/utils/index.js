import moment from 'moment'

export function getCurrentViewByYearMonth (momentObj) {
  if (!(momentObj instanceof moment)) {
    throw new Error('params must be an instance of moment')
  }

  const dayOfTheFirstDate = momentObj.date(1).day()
  let cursor = -(dayOfTheFirstDate + 1)

  const monthView = []
  const countOfWeek = 6

  for (let i = 0; i < countOfWeek; i++) {
    const weekView = []
    for (let j = 0; j < 7; j++, cursor++) {
      weekView[j] = momentObj.date(cursor)
    }
    monthView.push(weekView)
  }

  return monthView
}
