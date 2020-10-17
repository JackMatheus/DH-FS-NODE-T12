module.exports = function(callback){
    console.log("Executando função sincrona");
    callback("Callback executado",123);
}