
function getNotes() {
  fetch(URL)
  .then(res => res.json())
  .then(json => {
    console.log({json})
    renderGraphs(json)
  })
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
