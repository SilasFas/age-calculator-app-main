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

const validDate = window.document.getElementById('validDate')

// Result
const yearsResult = window.document.getElementById('yearsResult')
const monthsResult = window.document.getElementById('monthsResult')
const daysResult = window.document.getElementById('daysResult')

day.addEventListener('click', (() => {
    dayRequired.style.display = 'none'
    day.style.borderColor = 'hsl(259, 100%, 65%)'
    dayLabel.style.color = 'hsl(0, 1%, 44%)'
    valid_day.style.display = 'none'
    day.value = ''
    validDate.style.display = 'none'
}))

month.addEventListener('click', (() => {
    monthRequired.style.display = 'none'
    month.style.borderColor = 'hsl(259, 100%, 65%)'
    monthLabel.style.color = 'hsl(0, 1%, 44%)'
    valid_month.style.display = 'none'
    month.value = ''
    validDate.style.display = 'none'
}))

year.addEventListener('click', (() => {
    yearRequired.style.display = 'none'
    year.style.borderColor = 'hsl(259, 100%, 65%)'
    yearLabel.style.color = 'hsl(0, 1%, 44%)'
    valid_year.style.display = 'none'
    year.value = ''
    validDate.style.display = 'none'
}))

button.addEventListener('click', (() => {
    const currentDate = new Date()
    let currentYear = currentDate.getFullYear()

    if (day.value == '' & month.value == '' & year.value == '') {
        dayRequired.style.display = 'block'
        monthRequired.style.display = 'block'
        yearRequired.style.display = 'block'
        day.style.borderColor = 'rgba(255, 0, 0, 0.411)'
        dayLabel.style.color = 'rgba(134, 1, 1, 0.562)'
        month.style.borderColor = 'rgba(255, 0, 0, 0.411)'
        monthLabel.style.color = 'rgba(134, 1, 1, 0.562)'
        year.style.borderColor = 'rgba(255, 0, 0, 0.411)'
        yearLabel.style.color = 'rgba(134, 1, 1, 0.562)'
    }
    else if (day.value == '') {
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

        // validates if the date is real or exist
        function isValidDate(day, month, year) {
            const date = new Date(year, month - 1, day);
            return (
                date.getDate() === day &&
                date.getMonth() === month - 1 &&
                date.getFullYear() === year
            );
        }

        if (isValidDate(dayNumber, monthNumber, yearNumber)) {
            let ageInMilliseconds = currentDate - userBirthDate
            const ageDate = new Date(ageInMilliseconds)

            const years = ageDate.getUTCFullYear() - 1970
            const months = ageDate.getUTCMonth();
            const days = ageDate.getUTCDate() - 1;

            yearsResult.innerText = years
            monthsResult.innerText = months
            daysResult.innerText = days
        } else {
            validDate.style.display = 'block'
            day.style.borderColor = 'rgba(255, 0, 0, 0.411)'
            dayLabel.style.color = 'rgba(134, 1, 1, 0.562)'
            month.style.borderColor = 'rgba(255, 0, 0, 0.411)'
            monthLabel.style.color = 'rgba(134, 1, 1, 0.562)'
            year.style.borderColor = 'rgba(255, 0, 0, 0.411)'
            yearLabel.style.color = 'rgba(134, 1, 1, 0.562)'
        }
    }
}))