document.querySelector('.day').addEventListener('click', getDay)
document.querySelector('.wild').addEventListener('click', getWild)
document.querySelector('.day').addEventListener('click', showHide)
document.querySelector('.wild').addEventListener('click', showHide)

const clear = document.querySelector('.clear')

function getDay() {

    fetch('https://uselessfacts.jsph.pl/today.json?language=en') 
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.querySelector('.fact').innerText = data.text;
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      })

}

function getWild() {

    fetch('https://uselessfacts.jsph.pl//random.json?language=en') 
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.querySelector('.fact').innerText = data.text;
      })
      .catch(err => {
          console.log(`error ${err}`)
      })

}

function showHide() {
    clear.classList.remove('hidden')
}
