<<<<<<< HEAD
const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result')
    const range = document.querySelector('#range')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height} `;
    }

   else if (weight === '' || weight < 0  || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }

    else{
      const bmi = (weight / ((height*height) / 10000)).toFixed(2);
      results.innerHTML = `<span>${bmi}</span>`
    }  

=======
const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result')
    const range = document.querySelector('#range')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height} `;
    }

   else if (weight === '' || weight < 0  || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }

    else{
      const bmi = (weight / ((height*height) / 10000)).toFixed(2);
      results.innerHTML = `<span>${bmi}</span>`
    }  

>>>>>>> 2f3b1001d56f2be936d82251943bfa2b4c0c65bd
})