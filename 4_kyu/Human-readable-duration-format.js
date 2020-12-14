function formatDuration (seconds) {
  if (seconds === 0) {
    return 'now'
  }
  const year = Math.floor(seconds / (86400 * 365))
  const day = Math.floor(seconds % (86400 * 365) / 86400)
  const hour = Math.floor(((seconds % (86400 * 365)) % 86400) / 3600)
  const minute = Math.floor((((seconds % (86400 * 365)) % 86400) % 3600) / 60)
  const second = (((seconds % (86400 * 365)) % 86400) % 3600) % 60

  const returnSeconds = function () {
    return (second ? (((seconds > 60) ? ' and ' + second + " second" : +second + " second") + (second === 1 ? '' : 's')) : '')
  }

  const returnMinutes = function () {
    if (second === 0 && day !== 0) {
      return 'and ' + (minute ? minute + " minute" + (minute === 1 ? '' : 's') : '')
    }
    return (minute ? minute + " minute" + (minute === 1 ? '' : 's') : '')
  }

  const returnHours = function () {
    if (second === 0 && minute === 0 && day === 0) {
      return (hour ? hour + " hour" + (hour === 1 ? '' : 's') : '')
    }
    if (returnMinutes().charAt(0) === 'a') {
      return (hour ? hour + " hour" + (hour === 1 ? ' ' : 's ') : '')
    }
    if (minute === 0) {
      return (hour ? hour + " hour" + (hour === 1 ? ' ' : 's') : '')
    }
    if (second === 0 && minute === 0) {
      return (hour ? hour + " hour" + (hour === 1 ? '' : 's') : '')
    }

    return (hour ? hour + " hour" + (hour === 1 ? ', ' : 's, ') : '')
  }

  const returnDays = function () {
    return (day ? day + " day" + (day === 1 ? ', ' : 's, ') : '')
  }

  const returnYears = function () {
    return (year ? year + " year" + (year === 1 ? ', ' : 's, ') : '')
  }

  return returnYears() + returnDays() + returnHours() + returnMinutes() + returnSeconds()
}

console.log(formatDuration(1)) // "1 second"
console.log(formatDuration(62)) // "1 minute and 2 seconds"
console.log(formatDuration(120)) // "2 minutes"
console.log(formatDuration(3600)) // "1 hour"
console.log(formatDuration(3662)) // "1 hour, 1 minute and 2 seconds"