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
