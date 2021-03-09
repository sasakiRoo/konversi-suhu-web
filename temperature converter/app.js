const input = document.querySelector('[data-new-list-form]')
const data = document.querySelector('.output-section')
const btn = document.querySelector('.submit')
const body = document.getElementsByTagName('body')[0]
btn.addEventListener('click', e=>{
    e.preventDefault()
    formula()
})
// formula
// (0°C × 9/5) + 32
function formula(){
   const calc = (input.value * 9/5) + 32;
   if (input.value > 40){
    data.innerHTML = `${parseFloat(calc).toFixed(1)}° F, panas banget!`
    body.style.backgroundColor = '#ff3232'
   }else if (input.value >= 30 && input.value <= 40){
    data.innerHTML = `${parseFloat(calc).toFixed(1)}° F, panas!`
    body.style.backgroundColor = '#ff4c4c'
   }else if (input.value >= 21 && input.value <= 29){
    data.innerHTML = `${parseFloat(calc).toFixed(1)}° F, hangat!`
    body.style.backgroundColor = '#ff9999'
   }else if (input.value >= 10 && input.value <= 20){
    data.innerHTML = `${parseFloat(calc).toFixed(1)}° F, sejuk!`
    body.style.backgroundColor = '#b2b2ff'
   }else if (input.value >= 0 && input.value < 10){
    data.innerHTML = `${parseFloat(calc).toFixed(1)}° F, dingin!`
    body.style.backgroundColor = '#4c4cff'
   }else if (input.value < 0){
    data.innerHTML = `${parseFloat(calc).toFixed(1)}° F, dingin banget!`
    body.style.backgroundColor = '#3232ff'
   }else{
    data.innerHTML = `ketik ulang!`
   }
}
