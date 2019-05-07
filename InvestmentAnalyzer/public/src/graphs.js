function getGraphs() {
  fetch(URL)
    .then(res => res.json())
    .then(json => renderAllGraphs(json))
}

function renderAllGraphs(graphsData) {
  graphsData.forEach(graphData => {
    renderDataToGraph(graphData)
  })
}

function renderDataToGraph(data) {
  let id = data.id
  let title = data.title
  let axisData = parseGraphData(data.data_points)
  let graph = new Graph(data, axisData)
  graph.renderGraph()
}

function parseGraphData(dataPoints) {
  let dataSet = {
    xaxis: [],
    yaxis: []
  }
  dataPoints.forEach(dataPoint => {
    dataSet['xaxis'].push(parseInt(dataPoint.year))
    dataSet['yaxis'].push(parseInt(dataPoint.amount))
  })
  return dataSet
}

function loadEditParams(graph) {
  let form = document.getElementById('form')
  form.elements.title.value = graph.title
  form.elements.principal.value = graph.principal
  form.elements.monthly_contribution.value = graph.monthlyContribution
  form.elements.interest_rate.value = graph.annualInterestRate
  form.elements.period.value = graph.investmentPeriod
  form.elements.hidden.value = graph.id
}
