// let warningDiv = document.getElementById('warnings') // validity check

function handleSubmit(ev) {
  ev.preventDefault()
  
  let isEdit = ev.target.elements.hidden.value
  let title = ev.target.elements.title.value
  let principal = ev.target.elements.principal.value
  let monthly_contribution = ev.target.elements.monthly_contribution.value
  let interest_rate = ev.target.elements.interest_rate.value
  let period = ev.target.elements.period.value

  // if (warningDiv.childElementCount === 0) { //validity check

    if (isEdit != '') {
      fetch(URL + '/' + `${isEdit}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            title: title,
            principal: principal,
            monthly_contribution: monthly_contribution,
            annual_interest_rate: interest_rate,
            investment_period: period,
            compound_period: '12'
          })
        })
        .then(res => res.json())
        .then(json => editGraph(json))
        .then(_ => clearFormParams())
        .then(_ => window.scrollTo(0, 0))
    } 
    
    else {
      fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            title: title,
            principal: principal,
            monthly_contribution: monthly_contribution,
            annual_interest_rate: interest_rate,
            investment_period: period,
            compound_period: '12'
          })
        })
        .then(res => res.json())
        .then(json => renderDataToGraph(json))
        .then(_ => clearFormParams())
        .then(_ => window.scrollTo(0, 0))
    }
  // } //validity check
  // else {
  //   return null
  // }
}

function sendDeleteRequest(id) {
  fetch(URL + '/' + `${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(_ => removeChart(id))
    .then(_ => removeChartParentDiv(id))
    .then(_ => clearFormParams())
}

// function checkFormValidity(ev) { //validity check

//  let name = ev.target.name
//  let value = ev.target.value

//  if (name !== 'title' && value !== '') {
//   if (isNaN(parseInt(value))) {
//     let warning = document.createElement('div')
//     warning.setAttribute('id',`warning:${name}`)
//     warning.setAttribute('class','visible')
//     warning.textContent = `Number fields should only contain integers or decimals`
//     warningDiv.appendChild(warning)
//   }
//   else {
//     let warning = document.getElementById(`warning:${name}`)
//     if (warning) { 
//       warning.classList.remove('visible')
//       warning.setAttribute('class','not-visible')  
//       setTimeout(() => warning.remove(),500)
//       }
//     }
//   }
// }


