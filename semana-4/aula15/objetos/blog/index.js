const posts = []

if (sessionStorage.posts) {
  const postsAnteriores = JSON.parse(sessionStorage.posts)
  posts.push(...postsAnteriores)
}

const tituloPost = document.getElementById("titulo-post")
const autorPost = document.getElementById("autor-post")
const conteudoPost = document.getElementById("conteudo-post")
const imagemPost = document.getElementById("imagem-post")

function adicionarPost()  {
  const postNovo = {
    titulo: tituloPost.value,
    autor: autorPost.value,
    conteudo: conteudoPost.value,
    imagem: imagemPost.value
  }
  
  postNovo.conteudo = postNovo.conteudo.replace(/(\r\n|\n|\r)/gm, "<br>")
  
  posts.push(postNovo)
  
  sessionStorage.posts = JSON.stringify(posts)

  tituloPost.value = ""
  autorPost.value = ""
  conteudoPost.value = ""
  imagemPost.value = ""
}

function criarPost() {
  if (!tituloPost.value || !autorPost.value || !conteudoPost.value || !imagemPost.value) {
    alert("Tem que preenhcer todos os campos, bicho!")
  } else {
    adicionarPost()
    window.open("posts.html", "_blank")
  }
}