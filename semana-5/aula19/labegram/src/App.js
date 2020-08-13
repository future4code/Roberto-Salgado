import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?a=1',
        fotoPost: 'https://picsum.photos/200/150?a=1'
      },
      {
        nomeUsuario: 'darvasso',
        fotoUsuario: 'https://picsum.photos/50/50?a=2',
        fotoPost: 'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuario: 'dabreu',
        fotoUsuario: 'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=3'
      }
    ]
  }


  render() {

    const listaPosts = this.state.posts.map((post) => {
      return (
        <Post 
          nomeUsuario = { post.nomeUsuario }
          fotoUsuario = { post.fotoUsuario }
          fotoPost = { post.fotoPost }
        />
      )
    })

    return (
      <div className={'app-container'}>{listaPosts}</div>
    );
  }
}

export default App;
