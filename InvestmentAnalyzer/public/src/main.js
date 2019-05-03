document.body.style.backgroundColor = 'white'


const URL = 'http://localhost:3000/api/v1/graphs'

function main() {
  //getNotes()
  let data = {xaxis: [1,2,3,4], yaxis: [5,6,7,8]}
  let g = new Graph(1,'jons graph',data )
  g.setup()
  g.renderGraph()

}

main()
