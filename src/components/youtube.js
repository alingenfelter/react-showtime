const h = require('react-hyperscript')
const { Link } = require('react-router')

module.exports = props => h('div', [
  h('h1', ['YouTube']),
  h(Link, { to: '/', className: 'link'}, 'Home')
])