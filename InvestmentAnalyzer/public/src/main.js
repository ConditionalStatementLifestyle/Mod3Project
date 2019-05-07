document.body.style.backgroundColor = 'white'


const URL = 'http://localhost:3000/api/v1/graphs'

function main() {
  // getGraphs()
  // let data = {
  //   xaxis: [1, 2, 3, 4],
  //   yaxis: [5, 6, 7, 8]
  // }
  // let data1 = {
  //   xaxis: [1, 2, 3, 4],
  //   yaxis: [10, 100, 1000, 10000]
  // }
  // let g = new Graph(1,'jons graph',data )
  // g.renderGraph()
  // let g1 = new Graph(1,'jons graph',data1 )
  // g1.renderGraph()
  let form = document.getElementById('form')
  form.addEventListener('submit', handleSubmit)

  function handleSubmit(ev) {
    ev.preventDefault()
    let title = ev.target.elements[0].value
    let principal = ev.target.elements[1].value
    let monthly_contribution = ev.target.elements[2].value
    let interest_rate = ev.target.elements[3].value
    let period = ev.target.elements[4].value


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

main()
