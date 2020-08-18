import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

export default class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: '',
      filtroNome: ''
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  }

  componentDidMount() {
    this.setState({ tarefas: JSON.parse(localStorage.getItem("tarefas")) || [] });
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    this.setState({
      tarefas: [novaTarefa, ...this.state.tarefas],
      inputValue: ''
    })
  }
  
  selectTarefa = id => {
    const novoTarefas = this.state.tarefas.map(tarefa => {
      if (tarefa.id === id) {
        const novoTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novoTarefa
      }
      return tarefa
    })

    this.setState({ tarefas: novoTarefas })
  }
    
  removerTarefa = (id) => {
    const novoTarefas = this.state.tarefas.filter(tarefa => {
      return id !== tarefa.id
    })

    this.setState({ tarefas: novoTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  aoFiltrarNome = (event) => {
    this.setState({ filtroNome: event.target.value })
  }

  limparTarefas = () => {
    this.setState({ tarefas: [] })
  }

  ordemCrescente = () => {
    const tarefasCrescente = [...this.state.tarefas]

    tarefasCrescente.sort((a, b) => {
      return (a.texto.toLowerCase() > b.texto.toLowerCase()) ? -1 : 1
    })

    this.setState({ tarefas: tarefasCrescente })
  }
  
  ordemDecrescente = () => {
    const tarefasDecrescente = [...this.state.tarefas]

    tarefasDecrescente.sort((a, b) => {
      return (a.texto.toLowerCase() < b.texto.toLowerCase()) ? -1 : 1
    })

    this.setState({ tarefas: tarefasDecrescente })
  }

  render() {

    const listaFiltrada = [...this.state.tarefas]
    .filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })
    // .filter(tarefa => {
    //   if (tarefa.texto === this.state.filtroNome) {
    //     return true
    //   } else {
    //     return false
    //   }
    // })
    .sort((a, b) => {
      return (a.completa > b.completa) ? 1 : -1
    })

    console.log(this.state.filtroNome)



    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input onChange={this.onChangeInput} value={this.state.inputValue} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select onChange={this.onChangeFilter} value={this.state.filtro}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        
        <br/>

        <InputsContainer>
          <label>Filtro por nome</label>
          <select onChange={this.aoFiltrarNome} value={this.state.filtroNome}>
            <option value="">Nenhum</option>
            {this.state.tarefas.map(tarefa => {
              return (
              <option value={ tarefa.id }>
                { tarefa.texto }
              </option>
              )
            })}
          </select>
        </InputsContainer>
        
        <br/>

        <InputsContainer>
          <button onClick={this.limparTarefas}>Limpar tarefas</button>
          <button onClick={this.ordemCrescente}>Ordem Crescente</button>
          <button onClick={this.ordemDecrescente}>Ordem Decrescente</button>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick={() => this.removerTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}