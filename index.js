// Input variables
const day = window.document.getElementById('day')
const month = window.document.getElementById('month')
const year = window.document.querySelector('#year')

const button = window.document.querySelector('#button')

// validation variables
const dayRequired = window.document.getElementById('dayRequired')
const monthRequired = window.document.getElementById('monthRequired')
const yearRequired = window.document.getElementById('yearRequired')

const dayLabel = window.document.getElementById('dayLabel')
const monthLabel = window.document.getElementById('monthLabel')
const yearLabel = window.document.getElementById('yearLabel')

const valid_day = window.document.getElementById('valid_day')
const valid_month = window.document.getElementById('valid_month')
const valid_year = window.document.getElementById('valid_year')

// Result
const yearsResult = window.document.getElementById('yearsResult')
const monthsResult = window.document.getElementById('monthsResult')
const daysResult = window.document.getElementById('daysResult')

button.addEventListener('click', (() => {
    const currentDate = new Date()
    let currentYear = currentDate.getFullYear()

    if (day.value == '') {
        dayRequired.style.display = 'block'
        day.style.borderColor = 'rgba(255, 0, 0, 0.411)'
        dayLabel.style.color = 'rgba(134, 1, 1, 0.562)'
    }
    else if (day.value < 1 || day.value > 31) {
        valid_day.style.display = 'block'
        day.style.borderColor = 'rgba(255, 0, 0, 0.411)'
        dayLabel.style.color = 'rgba(134, 1, 1, 0.562)'
    }
    else if (month.value == '') {
        monthRequired.style.display = 'block'
        month.style.borderColor = 'rgba(255, 0, 0, 0.411)'
        monthLabel.style.color = 'rgba(134, 1, 1, 0.562)'
    }
    else if (month.value < 1 || month.value > 12) {
        valid_month.style.display = 'block'
        month.style.borderColor = 'rgba(255, 0, 0, 0.411)'
        monthLabel.style.color = 'rgba(134, 1, 1, 0.562)'
    }
    else if (year.value == '') {
        yearRequired.style.display = 'block'
        year.style.borderColor = 'rgba(255, 0, 0, 0.411)'
        yearLabel.style.color = 'rgba(134, 1, 1, 0.562)'
    }
    else if (year.value > currentYear) {
        valid_year.style.display = 'block'
        year.style.borderColor = 'rgba(255, 0, 0, 0.411)'
        yearLabel.style.color = 'rgba(134, 1, 1, 0.562)'
    }
    else {
        let dayNumber = Number(day.value)
        let monthNumber = Number(month.value)
        let yearNumber = Number(year.value)

        let userBirthDate = new Date(yearNumber, monthNumber - 1, dayNumber);

        let ageInMilliseconds = currentDate - userBirthDate
        const ageDate = new Date(ageInMilliseconds)

        const years = ageDate.getUTCFullYear() - 1970
        const months = ageDate.getUTCMonth();
        const days = ageDate.getUTCDate() - 1;

        yearsResult.innerText = years
        monthsResult.innerText = months
        daysResult.innerText = days
    }
}))