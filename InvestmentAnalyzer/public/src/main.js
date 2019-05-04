document.body.style.backgroundColor = 'white'


const URL = 'http://localhost:3000/api/v1/graphs'

function main() {
  //getNotes()
  let data = {xaxis: [1,2,3,4], yaxis: [5,6,7,8]}
  let data1 = {xaxis: [1,2,3,4], yaxis: [10,100,1000,10000]}
  let g = new Graph(1,'jons graph',data )
  g.renderGraph()
  let g1 = new Graph(1,'jons graph',data1 )
  g1.renderGraph()

}

main()
