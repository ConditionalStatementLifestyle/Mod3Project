function renderDataToGraph(data) {
  let id = data.id
  let title = data.title
  let axisData = parseGraphData(data.data_points)
  let graph = new Graph(id, title, axisData)
  graph.renderGraph()
}

function renderGraphs(graphs) {
  graphs.forEach(addGraph)
}

function addGraph(graph) {
  // let testDiv = document.getElementById('test')
  // let h = document.createElement('h1')
  // h.textContent = 'this is working'
  // testDiv.appendChild(h)
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
