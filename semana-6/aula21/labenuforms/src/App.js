import React from 'react'
import './App.css'
import Etapa1 from './assets/components/Etapa1'
import Etapa2 from './assets/components/Etapa2'
import Etapa3 from './assets/components/Etapa3'
import Final from './assets/components/Final'

export default class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        return <Final />
    }
  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }

  render() {

    return (
      <div>
        { this.renderizarEtapa() }
        <br />
        {this.state.etapa !== 4 &&(
          <button onClick={ this.irParaProximaEtapa }>Próxima Etapa</button>
        )}
      </div>
    )
  }
}