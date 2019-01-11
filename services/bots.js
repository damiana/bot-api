const util = require("../utils/controllers");


function teste() {
    return new Promise((resolve, reject) => {
        try {
            resolve("service chamado com sucesso");
        } catch(err){
            console.log("Erro ao chamar o service: " + err);
            reject("Erro ao chamar o service: " + err);
        }
    });
}

module.exports = {
    teste
  };