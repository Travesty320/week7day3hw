let form = document.querySelector('#PokeForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let pokemon = event.path[0][0].value
    console.log(pokemon);
    pokeapi(pokemon);
    form.reset();
})

let getPoke = async (pokemon)=> {
    try {
        let response =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
getPoke('')

let pokeapi = async (pokemon) => {
    let data = await getPoke(pokemon);
    console.log(data);
    let new_rows = `<tr><td scope='row'>${data.forms[0].name}</td></tr><tr><td scope='row'><img src=${data.sprites.front_default}></td></tr>`;
    document.getElementById('pokebody').insertAdjacentHTML('afterbegin', new_rows);

}
let clearData = () => {
    document.getElementById('pokebody').innerHTML='';
}