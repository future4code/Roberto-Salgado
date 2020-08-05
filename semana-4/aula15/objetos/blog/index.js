const posts = []

function adicionarPost()  {
  const tituloPost = document.getElementById("titulo-post")
  const autorPost = document.getElementById("autor-post")
  const conteudoPost = document.getElementById("conteudo-post")
  const imagemPost = document.getElementById("imagem-post")
  const postNovo = {
    titulo: tituloPost.value,
    autor: autorPost.value,
    conteudo: conteudoPost.value,
    imagem: imagemPost.value
  }
  

  postNovo.conteudo = postNovo.conteudo.replace(/(\r\n|\n|\r)/gm, "<br>")
  
  posts.push(postNovo)

  // console.log(postNovo)
  // console.log(posts)

  const container = document.getElementById("container-de-posts")
  container.innerHTML += `
    <h1>${posts[posts.length - 1].titulo}</h1>
    <h2>por ${posts[posts.length - 1].autor}</h2>
    <p>${posts[posts.length - 1].conteudo}</p>
  `

  if (postNovo.imagem.includes('.png') || postNovo.imagem.includes('.jpg')) {
    container.innerHTML += `<img src=${posts[posts.length - 1].imagem}>`
  } else {
    alert("Link inválido.\nImagem não será postada.")
  }

  tituloPost.value = ""
  autorPost.value = ""
  conteudoPost.value = ""
  imagemPost.value = ""
}



function criarPost(evento) {
  adicionarPost()
}