const container = document.getElementById('container')
console.log(container)

async function requisicaoApiRestCountries() {
    try{
        const fetchApiRestCountries = await fetch('https://restcountries.com/v3.1/all')
        const respostaConvertida = await fetchApiRestCountries.json()
        const arrayPaises = respostaConvertida
        return arrayPaises
    }catch (erro){
        console.log(erro)
    }
}

async function renderizaPaises (){
    const arrayPaises = await requisicaoApiRestCountries ()
    console.log(arrayPaises)
    const cardPaises = arrayPaises.map((pais) => {
        return `
                <div class="card-container ${pais.region}">
                    <img scr="${pais.flags.png}" alt="">
                    <div class="card-texto">
                        <h2>${pais.name.common}</h2>
                        <hr>
                        <div>
                            <h3>população:</h3>
                            <p>${pais.population}</p>
                        </div>
                        <div>
                            <h3>capital:</h3>
                            <p>${pais.capital === undefined ? 'não consta':pais.fifa}</p>
                        </div>
                        <div>
                            <h3>continente:</h3>
                            <p>${pais.continents}</p>
                        </div>
                        
    }
}