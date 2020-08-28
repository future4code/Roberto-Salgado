import React from 'react'
import axios from 'axios' // eslint-disable-next-line
import styled from 'styled-components'
import { swUrl } from '../constants/axiosConstants'

export class StarWars extends React.Component {
  state = {
    filmsList: [],
    filmTitle: '',
    director: '',
    episode: '',
    opening: ''
  }

  getFilms = () => {
    axios
      .get(`${swUrl}`)
      .then(response => {
        this.setState({filmsList: response.data.results})
        // console.log(this.state.filmsList)
      })
      .catch(error => {
        console.log(error)
      })
  }

  getFilmResource = (film) => {
    axios
      .get(`${swUrl}/${film}`)
      .then(response => {
        this.setState({
          filmTitle: response.data.title,
          episode: response.data.episode_id,
          director: response.data.director,
          opening: response.data.opening_crawl
        })
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  selectFilm = (e => {
    this.getFilmResource(e.target.value)
  })

  componentDidMount = () => {
    this.getFilms()
  }

  render() {

    const filmResource = (
      <div>
        <h2>{this.state.filmTitle}</h2>
        <h3>Episódio: {this.state.episode}</h3>
        <h4>Diretor: {this.state.director}</h4>
        <p>{this.state.opening}</p>
      </div>
    )

    return(
      <div>
        <h1>Star Wars</h1>
        <select onChange={this.selectFilm}>
          <option value={''}></option>
          {this.state.filmsList.map((film, i) => {
            return (
              <option key={film.episode_id} value={i+1}>
                {film.title}
              </option>
            )
          })}
        </select>
        {this.state.episode && filmResource}
      </div>
    )
  }
}