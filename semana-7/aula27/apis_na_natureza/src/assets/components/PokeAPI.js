import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { pokeUrl } from '../constants/axiosConstants'

const PokedexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PokemonCard = styled.div`
  min-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  padding: 2em;
  margin-top: 1.5em;
  border-radius: 0.8rem;

  img {
    width: 200px;
  }
`
const PokemonCardTitle = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;

  span {
    font-size: 24px;
    font-weight: 600;
    background-color: white;
    padding: 0.4em;
    border-radius: 0.4em;
  }
`

const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 0 0 1em 0;
  }
`

const PokemonTypesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1em;
  background-color: white;
  border-radius: 1.6em;
  padding: 0.8em 0;
`

const PokemonTypes = styled.span`
  background-color: black;
  color: white;
  border-radius: 8px;
  padding: 0.2em 0.5em;
`

export class PokeAPI extends React.Component {
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
      .get(`${pokeUrl}/?limit=151`)
      .then((response) => {
        this.setState({ pokedex: response.data.results })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  catchPokeData = (name) => {
    axios
      .get(`${pokeUrl}/${name}`)
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
        console.log(error)
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
      <PokemonCard>
        <PokemonCardTitle>
          <span>{ this.state.pokemonName }</span>
          <span>#{ this.state.pokemonId }</span>
        </PokemonCardTitle>
        <img alt={'Pokemon Snap'} src={this.state.pokemonSnap} />
        <DetailsContainer>
          <h3>Tipos:</h3>
          <PokemonTypesContainer>
          { this.state.pokemonTypes.map(type => {
            return (
              <PokemonTypes key={ type.slot }>
                { this.capitalize(type.type.name) }
              </PokemonTypes>
            )
          }) }
          </PokemonTypesContainer>
        </DetailsContainer>
      </PokemonCard>
    )

    return (
      <PokedexContainer>
        <h1>Pokedex 1st Gen</h1>
        <select onChange={this.iChooseYou}>
          <option value={""}></option>
          {this.state.pokedex.map((poke) => {
            return (
              <option key={poke.name} value={poke.name}>
                {this.capitalize(poke.name)}
              </option>
            )
          })}
        </select>
        {this.state.pokemonId && pokemonCard}
      </PokedexContainer>
    )
  }
}
