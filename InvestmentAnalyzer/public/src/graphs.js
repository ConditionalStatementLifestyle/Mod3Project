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
  let axisData = parseGraphData(data.data_points)
  let chartInstance = new Graph(data, axisData)
  chartInstance.renderGraph()
}

function parseGraphData(dataPoints) {
  let axisData = {
    xaxis: [],
    yaxis: []
  }
  dataPoints.forEach(dataPoint => {
    axisData['xaxis'].push(parseInt(dataPoint.year))
    axisData['yaxis'].push(parseInt(dataPoint.amount))
  })
  return axisData
}

function loadEditParams(chart) {
  let form = document.getElementById('form')
  form.elements.title.value = chart.title
  form.elements.principal.value = chart.principal
  form.elements.monthly_contribution.value = chart.monthlyContribution
  form.elements.interest_rate.value = chart.annualInterestRate
  form.elements.period.value = chart.investmentPeriod
  form.elements.hidden.value = chart.id
}

function clearFormParams() {
  let form = document.getElementById('form')
  form.elements.title.value = ''
  form.elements.principal.value = ''
  form.elements.monthly_contribution.value = ''
  form.elements.interest_rate.value = ''
  form.elements.period.value = ''
  form.elements.hidden.value = ''
}

function editGraph(data) {
  let chartInstance = findChart(data.id)
  let blankDiv = removeChartDivChildren(chartInstance)
  let axisData = parseGraphData(data.data_points)
  chartInstance.graphObject.updateAxisData(axisData)
  chartInstance.graphObject.updateAttributes(data)
  removeChart(data.id)
chartInstance.graphObject.renderGraph(blankDiv.divObject)
}
function removeChartFromPage(data) {
  let chartInstance = findChart(data.id)
  removeChartDivChildren(chartInstance)
  sendDeleteRequest(data.id)
}

function removeChartParentDiv(id) {
  let parentChartParentDiv = document.getElementById(`Graph:${id}`)
  parentChartParentDiv.remove()
}


let storeChart, findChart, allGraphs, removeChartDivChildren, removeChart

function initializeGraphStorage() {
  let allChartInstances = []

  storeChart = function(div, graph) {
    allChartInstances.push({
      divObject: div,
      graphObject: graph
    })
  }

  findChart = function(id) {
    let chartInstance = allChartInstances.find(element => {
      if (element.divObject.id === `Graph:${id}`) {
        return element
      }
    })
    return chartInstance
  }

  removeChartDivChildren = function(chartInstance) {
    while (chartInstance.divObject.firstChild) {
      chartInstance.divObject.firstChild.remove()
    }
    return chartInstance
  }

  removeChart = function(id) {
    for (index = 0; index < allChartInstances.length; index++) {
      if (id === allChartInstances[index].graphObject.id) {
        allChartInstances.splice(index,1)
      }
    }
  }

  allGraphs = function() {
    return allChartInstances
  }

}
