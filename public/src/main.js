const URL = 'https://secret-mesa-58919.herokuapp.com/api/v1/graphs'
// For local dev
// const URL = 'http://localhost:3000/api/v1/graphs' 

function main() {
  initializeGraphStorage()
  getGraphs()
  let form = document.getElementById('form')
  // form.addEventListener('change', checkFormValidity)
  form.addEventListener('submit', handleSubmit)
}

main()
