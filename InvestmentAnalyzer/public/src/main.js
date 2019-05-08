document.body.style.backgroundColor = 'white'

const URL = 'http://localhost:3000/api/v1/graphs'

function main() {
  initializeGraphStorage()
  getGraphs()

  let form = document.getElementById('form')
  form.addEventListener('submit', handleSubmit)

}

main()
