class Menu {

  constructor() {

  }

  renderMenu(parentButtonDiv, graphInstance) {
    let principal = document.createElement('div')
    principal.textContent = `Prinicipal: $${graphInstance.principal}`
    let monthlyContribution = document.createElement('div')
    monthlyContribution.textContent = `Monthly Contribution: $${graphInstance.monthlyContribution}`
    let annualInterestRate = document.createElement('div')
    annualInterestRate.textContent = `Interest Rate: ${graphInstance.annualInterestRate}%`
    let period = document.createElement('div')
    period.textContent = `Period: ${graphInstance.investmentPeriod} Years`
    let totalAmountAfterPeriod = document.createElement('div')
    let lastElement = graphInstance.data.yaxis.length - 1
    totalAmountAfterPeriod.textContent = `Total Worth: $${displayTotalWorthWithCommas(graphInstance.data.yaxis[lastElement])}`

    let textContainer = document.createElement('div')
    textContainer.setAttribute('id', 'menu-container-right')
    textContainer.setAttribute('class', 'menu-container-pane')

    principal.setAttribute('class', 'text-position')
    monthlyContribution.setAttribute('class', 'text-position')
    annualInterestRate.setAttribute('class', 'text-position')
    period.setAttribute('class', 'text-position')
    totalAmountAfterPeriod.setAttribute('class', 'total-bold')

    textContainer.appendChild(principal)
    textContainer.appendChild(monthlyContribution)
    textContainer.appendChild(annualInterestRate)
    textContainer.appendChild(period)
    textContainer.appendChild(totalAmountAfterPeriod)

    parentButtonDiv.appendChild(textContainer)

  }


}
