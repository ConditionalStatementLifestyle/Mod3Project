class Graph {

  constructor(dataJSON, axisData) {
    this.id = dataJSON.id
    this.title = dataJSON.title
    this.principal = dataJSON.principal
    this.monthlyContribution = dataJSON.monthly_contribution
    this.annualInterestRate = dataJSON.annual_interest_rate
    this.investmentPeriod = dataJSON.investment_period
    this.data = axisData
  }

  updateAxisData(axisData){
    this.data = axisData
  }

  updateAttributes(data) {
    this.title = data.title
    this.principal = data.principal
    this.monthlyContribution = data.monthly_contribution
    this.annualInterestRate = data.annual_interest_rate
    this.investmentPeriod = data.investment_period
  }


  renderGraph(div = null) {
    let graphsContainer = document.getElementById('graphs-container')

    if (div === null) {
      var div = document.createElement('div')
      div.setAttribute('class', 'chart')
      div.setAttribute('id', `Graph:${this.id}`)
    }

    let canvas = document.createElement('canvas')
    canvas.setAttribute('id', `Graph:${this.id}`)
  

    var ctx = canvas.getContext('2d')
    div.appendChild(canvas)
    graphsContainer.insertBefore(div,graphsContainer.firstChild);

    let buttonDiv = document.createElement('div')
    buttonDiv.setAttribute('id', 'menu-container')
    div.appendChild(buttonDiv)

    let menuContainerLeft = document.createElement('div')
    menuContainerLeft.setAttribute('id', 'menu-container-left')
    menuContainerLeft.setAttribute('class', 'menu-container-pane')
    let editButton = document.createElement('div')
    let deleteButton = document.createElement('div')
    editButton.setAttribute('class', 'button')
    editButton.setAttribute('entry-type', 'edit')
    deleteButton.setAttribute('class', 'button')
    editButton.textContent = 'Edit'
    deleteButton.textContent = 'Delete'
    buttonDiv.appendChild(editButton)
    buttonDiv.appendChild(deleteButton)

    editButton.addEventListener('click', () => loadEditParams(this))
    deleteButton.addEventListener('click', () => removeChartFromPage(this))
    storeChart(div, this)

    let menu = new Menu()
    menu.renderMenu(buttonDiv, this)

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
          fontSize: 50,
          fontFamily: "sans-serif"
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Years',
              fontSize: 20
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Total Value In $',
                fontSize: 20
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
