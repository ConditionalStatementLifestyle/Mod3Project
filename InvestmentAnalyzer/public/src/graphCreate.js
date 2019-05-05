class Graph {

  constructor(id, title, data) {
    this.id = id
    this.title = title
    this.data = data
  }


  renderGraph() {
    // let graphsDiv = document.getElementById('graphs')
    var div = document.createElement('div')
    div.setAttribute('class', 'chart')

    let canvas = document.createElement('canvas')
    canvas.setAttribute('id', `${this.id}`)
    canvas.setAttribute('width', '100px')
    canvas.setAttribute('height', '100px')
    var ctx = canvas.getContext('2d')
    div.appendChild(canvas)
    document.body.appendChild(div)
    // graphsDiv.appendChild(div)


    var newChart = new Chart(ctx, {
      title: `${this.title}`,
      type: 'line',
      data: {
        labels: this.data['xaxis'],
        datasets: [{
          label: '',
          data: this.data['yaxis'],
          backgroundColor: [
            'rgba(50, 99, 250, 0.1)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        title: {
            display: true,
            text: `${this.title.toUpperCase()}`,
            fontSize: 20,
            fontFamily: "sans-serif"
        },
        legend: {
            display: false,
            // text: `${this.title}`
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Years'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Total Value In $'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }


}
