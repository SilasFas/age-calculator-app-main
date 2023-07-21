const day = window.document.getElementById('day')
const month = window.document.getElementById('month')
const year = window.document.querySelector('#year')
const button = window.document.querySelector('#button')




button.addEventListener('click', (() => {
    let dayNumber = Number(day.value)
    let monthNumber = Number(month.value)
    let yearNumber = Number(year.value)

    console.log(dayNumber)
    console.log(monthNumber)
    console.log(yearNumber)
}))





// const date = new Date()
// console.log(date)
