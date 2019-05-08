class Menu {

  constructor() {

  }

  renderMenu(parentButtonDiv, graphInstance) {
    let principal = document.createElement('text')
    principal.textContent = `Prinicipal: $${graphInstance.principal}`
    let monthlyContribution = document.createElement('text')
    monthlyContribution.textContent = `Monthly Contribution: $${graphInstance.monthlyContribution}`
    let annualInterestRate = document.createElement('text')
    annualInterestRate.textContent = `Interest Rate: ${graphInstance.annualInterestRate}%`
    let period = document.createElement('text')
    period.textContent = `Period: ${graphInstance.investmentPeriod} Years`

    let textContainer = document.createElement('div')
    textContainer.setAttribute('class', 'menu-div')
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
