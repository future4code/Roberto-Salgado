import React from 'react' // eslint-disable-next-line
import styled from 'styled-components'
import { PokeAPI } from './assets/components/PokeAPI'
import { Lyrics } from './assets/components/Lyrics'
import { StarWars } from './assets/components/StarWars'

export default class App extends React.Component {
  state = {
    currentPage: ''
  }

  onChangePage = e => {
    this.setState({currentPage: e.target.value})
  }
  
  render() {

    const currentPage = this.state.currentPage
    let selectedPage = ''
    
    
    switch(currentPage) {
      case 'PokeAPI':
        selectedPage = <PokeAPI />
        break
      case 'Lyrics':
        selectedPage = <Lyrics />
        break
      case 'Star Wars':
        selectedPage = <StarWars />
        break
      default:
        break
    }

    return (
      <div>
        <select onChange={this.onChangePage}>
          <option value={''}></option>
          <option value={'PokeAPI'}>PokeAPI</option>
          <option value={'Lyrics'}>Lyrics</option>
          <option value={'Star Wars'}>Star Wars</option>
        </select>
        { selectedPage }
      </div>
    )
  }
}
