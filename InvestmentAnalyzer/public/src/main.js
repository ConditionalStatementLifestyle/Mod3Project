const URL = 'https://investment-analyzer1234.herokuapp.com/api/v1/graphs'
// const URL = 'http://localhost:3000/api/v1/graphs'

function main() {
  initializeGraphStorage()
  getGraphs()
  let form = document.getElementById('form')
  form.addEventListener('submit', handleSubmit)
}

main()
