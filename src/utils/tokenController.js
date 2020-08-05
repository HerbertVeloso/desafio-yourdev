// Pega o token da URL
const getHashParams = () => {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  while (e = r.exec(q)) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

const token = getHashParams().access_token

// Salva o token no local storage
localStorage.setItem('desafio/token', token);