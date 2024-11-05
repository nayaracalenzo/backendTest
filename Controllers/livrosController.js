function listarTodosLivros () {
  res.send('Listar todos os livros')
}
function listarUmLivro () {
  res.send('Listar um livro')
}
function criarUmLivro () {
  res.send('Criar livro')
}
function alterarLivros () {
  res.send('Alterar livro')
}
function deletarLivros () {
  res.send('Deletar livro')
}

module.exports = {
  listarTodosLivros,
  listarUmLivro,
  criarUmLivro,
  alterarLivros,
  deletarLivros
}