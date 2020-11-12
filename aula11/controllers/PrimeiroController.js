//1 html
const { dirname } = require("path");
const path = require ("path");

module.exports = {
  index (req, res) {
    //2 html
    //_dirname = o caminho que o arquivo se encontra
    // caminho do arquivo que preciso utilizar
    let pathFile = __dirname + '/teste.html';
    res.sendFile(pathFile);
    //res.sendFile(path.join(_dirname + './teste.html'));
  },
  
  //4 html PostINDEX

  postIndex (req, res) {
    console.log(req.body);
  },

  cumprimentar (req, res) {
    // console.log(req.url);
    // console.log(req.method);
    let { nome } = req.params
  
    res.send("Olá, " + nome);
  },

  calcular (req, res) {
    let { numero1, numero2 } = req.params;
  
    if(typeof numero2 !== "undefined"){
      let resultado = parseInt(numero1) + parseInt(numero2)
      res.send("O valor da soma entre os parâmetros informados na URL é: " + resultado);
    } else {
      res.send("O valor do primeiro parâmetro informado na URL é: " + numero1);
    }
  },

  getQueryParams (req, res) {
    let { nome } = req.params;
    let { sobrenome } = req.query; //para pegar info depois da interrogação

    res.send('Olá, ' + nome + ' ' + sobrenome);
  }
};