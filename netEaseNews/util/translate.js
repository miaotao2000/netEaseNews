const translate = (time) => {
  if (time.includes('a ') || time.includes('an ')) {
    time = time.replace(/a |an /, '1')
  }
  if (time.includes('hour ') || time.includes('hours ')) {
    time = time.replace(/hour |hours /, '小时')
  }
  if (time.includes('day ') || time.includes('days ')) {
    time = time.replace(/day |days /, '天')
  }
  if (time.includes('month ') || time.includes('months ')) {
    time = time.replace(/month |months /, '月')
  }
  if (time.includes('years ') || time.includes('year ')) {
    time = time.replace(/years |year /, '年')
  }
  if (time.includes('ago')) {
    time = time.replace(/ago/, '前')
  }
  if (time.includes(' ')) {
    time = time.replace(/ /, '')
  }
  return time
}

module.exports = translate