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

    let textContainer = document.createElement('div')
    textContainer.setAttribute('id', 'menu-container-right')
    textContainer.setAttribute('class', 'menu-container-pane')
    principal.setAttribute('class','text-position')
    monthlyContribution.setAttribute('class','text-position')
    annualInterestRate.setAttribute('class','text-position')
    period.setAttribute('class','text-position')

    textContainer.appendChild(principal)
    textContainer.appendChild(monthlyContribution)
    textContainer.appendChild(annualInterestRate)
    textContainer.appendChild(period)
    parentButtonDiv.appendChild(textContainer)

  }


}
