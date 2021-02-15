// minha api key
var apikey = {
    key: '3d5247c9-ba23-4aee-83fd-d28b0dbcd467'
}
// usando o metado get da biblioteca fetch do javascript para fazer uma requisição
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apikey.key)
    .then((response) => {
        if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {
        console.log(api)
        var texto = "";
        // pegando apenas 10 criptomoedas 
        for (let i = 0; i < 10; i++) {



            //Mostrando as informações

            texto = texto + `
     
        
        <div class="card cartao bg-light mt-md-2 mr-md-3 mb-md-5" style="width: 14rem;">
        <img src="./img/coin.jpg" class="card-img-top" alt="coin" width="100" height="150">
        <div class="card-body">
         <h5 class="card-title">${api.data[i].name}</h5>
        <p class="card-text">${api.data[i].symbol}</p>
        <p class="card-text">${api.data[i].first_historical_data}</p>
  
        </div>
        </div>
            
            `;

            document.getElementById("coins").innerHTML = texto;

        }
    })
    .catch((error) => {
        console.error(error.message);
    });

    // caso de erro