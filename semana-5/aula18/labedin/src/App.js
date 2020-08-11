import React from 'react'
import './App.css'
import CardGrande from './components/CardGrande/CardGrande'
import ImagemButton from './components/ImagemButton/ImagemButton'
import CardPequeno from './components/CardPequeno/CardPequeno'

import foto from './imgs/tansa-sq.jpg'
import stone from './imgs/stone.png'
import dta from './imgs/dta.png'
import refrin from './imgs/refrin.png'
import metso from './imgs/metso.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ foto } 
          nome="Roberto de Abreu Salgado" 
          descricao="Profissional com 8 anos de experiência em projetos de diversos setores, atuando, principalmente, em desenvolvimento de produto, elaboração de documentos, padronização de processos, gerenciamento de entrega, acompanhamento de progresso e conclusão, controle de suprimentos e desenvolvimento de fornecedores.Focado na excelência das entregas respeitando as diversidades, prazos e grau de complexidade em cada projetos, constantemente buscando soluções para problemas previstos, imprevistos e recorrentes."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ stone }
          nome="Stone" 
          descricao="Agente Comercial" 
        />
        
        <CardGrande 
          imagem={ dta }
          nome="DTA" 
          descricao="Coordenador de Projeto Mecânico" 
        />

        <CardGrande 
          imagem={ refrin }
          nome="Refrin" 
          descricao="Vendedor Técnico" 
        />
        
        <CardGrande 
          imagem={ metso }
          nome="Metso" 
          descricao="Engenheiro Projetista Trainee" 
        />
      </div>

      <div className="page-section-container">
        <h2>Meus contatos</h2>
        <CardPequeno
          informacao="E-mail"
          detalhe="robertodeabreusalgado@labenu.com.br"
        />

        <CardPequeno
          informacao="Endereço"
          detalhe="Rua Batatinha, 123, ap:13 - Santana, São Paulo/SP"
        />

        <CardPequeno
          informacao="Telefone"
          detalhe="(11)1234.5678"
        />

        <CardPequeno
          informacao="Celular"
          detalhe="(11)987.654.321"
        />

             
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
