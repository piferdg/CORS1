const express = require('express')
const cors = require('cors')
const data = require('./dataSet')
const port = 8000

const app = express()

function returnCohortId(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i]
    }
  }
}

app.get('/', (request, response) => {
  response.json({data})
})

app.get('/:id', (request, response) => {
  let cohort = returnCohortId(data, request.params.id)
  console.log('PARAMS, maybe?', request.params);
  
  if (!cohort) {
    response.status(404).json({
      error: {
        message: "No cohort found"
      }
    })
  } else {
    response.json({
      data: cohort
    })
  }
})


app.listen(port, function () {
  console.log('Listening on port', port)
  
})

module.exports = app