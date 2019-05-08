document.body.style.backgroundColor = 'white'


const URL = 'http://localhost:3000/api/v1/graphs'

function main() {
  initializeGraphStorage()
  getGraphs()

  let form = document.getElementById('form')
  form.addEventListener('submit', handleSubmit)

  function handleSubmit(ev) {
    ev.preventDefault()
    let isEdit = ev.target.elements.hidden.value
    let title = ev.target.elements.title.value
    let principal = ev.target.elements.principal.value
    let monthly_contribution = ev.target.elements.monthly_contribution.value
    let interest_rate = ev.target.elements.interest_rate.value
    let period = ev.target.elements.period.value
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
        .then(_ => () => {
          form.elements.hidden.value = ''
        })
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
    }
  }

}

main()
