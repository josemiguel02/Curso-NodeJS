const _ = require('underscore')

const users = [
  {
    id: 1,
    name: 'Elspeth'
  },
  {
    id: 2,
    name: 'Anna-diana'
  },
  {
    id: 3,
    name: 'Timmi'
  }
]

const Timmi = _.findWhere(users, { id: 3 })
console.log(Timmi)
