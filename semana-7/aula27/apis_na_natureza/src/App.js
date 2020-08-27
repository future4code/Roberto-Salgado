import React from 'react'
import './styles.css'
import axios from 'axios'
import styled from 'styled-components'
import { baseUrl } from './assets/constants/axiosConstants'

export default class App extends React.Component {
  state = {
    pokedex: [],
    pokemonName: '',
    pokemonId: '',
    pokemonSnap: '',
    pokemonTypes: []
  }

  capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  gottaCatchThemAll = () => {
    axios
      .get(`${baseUrl}/?limit=151`)
      .then((response) => {
        this.setState({ pokedex: response.data.results })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  catchPokeData = (name) => {
    axios
      .get(`${baseUrl}/${name}`)
      .then((response) => {
        this.setState({ 
          pokemonName: this.capitalize(response.data.name),
          pokemonId: response.data.id,
          pokemonSnap: response.data.sprites.front_default,
          pokemonTypes: response.data.types
        })
        console.log(this.state.pokemonTypes)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  iChooseYou = e => {
    this.catchPokeData(e.target.value)
  }

  componentDidMount() {
    this.gottaCatchThemAll()
  }

  render() {

    const pokemonCard = (
      <div>
        <h2>
          { this.state.pokemonName } <span>#{ this.state.pokemonId }</span>
        </h2>
        <img alt={'Pokemon Snap'} src={this.state.pokemonSnap} />
        <div>
          <h3>Tipos:</h3>
          { this.state.pokemonTypes.map(type => {
            return (
              <span key={ type.slot }>
                { this.capitalize(type.type.name) }
              </span>
            )
          }) }
        </div>
      </div>
    )

    return (
      <div className="App">
        <h1>Pokedex 1st Gen</h1>
        <select onChange={this.iChooseYou}>
          <option value={""}></option>
          {this.state.pokedex.map((poke) => {
            return (
              <option key={poke.name} value={poke.name}>
                {poke.name}
              </option>
            )
          })}
        </select>
        {this.state.pokemonId && pokemonCard}
      </div>
    )
  }
}
