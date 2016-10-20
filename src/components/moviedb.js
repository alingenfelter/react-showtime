const h = require('react-hyperscript')
const React = require('react')
const xhr = require('xhr')

const {
  Link
} = require('react-router')

const Moviedb = React.createClass({
  getInitialState: function () {
    return {
      s: '',
      r: 'json',
      movies: []
    }
  },
  handleChange: function (e) {
    this.setState({
      s: e.target.value
    })
  },
  handleSubmit: function (e) {
    e.preventDefault()
  //  console.log(this.state.s)
    xhr({
      method: 'GET',
      json: true,
      url: `https://www.omdbapi.com/?r=json&s=${this.state.s}`
    }, (err, res, body) => {
      if (err) {
        return console.log(err.message)
      }
      this.setState({
        movies: body.Search
      })
    })
  },
  render: function () {
    console.log(this.state)
    //console.log(this.state)
    return (
      h('div.pa4', [
        h('h1', 'Movies'),
        h('form', {
          onSubmit: this.handleSubmit
        }, [
          h('input.mb2', {
            onChange: this.handleChange
          })
        ]),
      //  h('button', 'Browse All Movies'),
        h(Link, {
          to: '/',
          className: 'link db mt2'
        }, 'Home'),
        h('div', this.state.movies.map(movie =>
           h('img', {
             src: movie.Poster
           })))
      ])
    )
  }
})

module.exports = Moviedb
