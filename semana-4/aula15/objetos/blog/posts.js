const posts = JSON.parse(sessionStorage.posts)

const containerPosts = document.getElementById("container-de-posts")

for (post of posts) {
  const postBox = document.createElement("article")
  postBox.className = "post"
  postBox.innerHTML += `<img src='${post.imagem}' alt='Imagem do post ${post.titulo}'>`
  postBox.innerHTML += `<h2>${post.titulo}</h2>`
  postBox.innerHTML += `<h3>${post.autor}</h3>`
  postBox.innerHTML += `<p>${post.conteudo}</p>`

  containerPosts.insertAdjacentElement("afterbegin", postBox)
}