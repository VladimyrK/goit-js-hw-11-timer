class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector
    this.targetDate = targetDate
  }

  timer() {
    const daysHtml = document.querySelector('[data-value="days"]')
    const hoursHtml = document.querySelector('[data-value="hours"]')
    const minutesHtml = document.querySelector('[data-value="mins"]')
    const secondsHtml = document.querySelector('[data-value="secs"]')

    setInterval(() => {
      const remainingTime = this.targetDate.getTime() - Date.now()
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const mins = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
      const secs = Math.floor((remainingTime % (1000 * 60)) / 1000)

      daysHtml.textContent = String(days).padStart(2, '0')
      hoursHtml.textContent = String(hours).padStart(2, '0')
      minutesHtml.textContent = String(mins).padStart(2, '0')
      secondsHtml.textContent = String(secs).padStart(2, '0')
    }, 1000)
  }
}

const newTimer = new CountdownTimer('#timer-1', new Date('Jul 17, 2022'))
newTimer.timer()
