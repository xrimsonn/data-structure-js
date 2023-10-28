var pokemonList = [];

async function fetchPokemonList() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50');
    const data = await response.json();
    pokemonList = data.results;
    console.log(pokemonList);
  } catch (error) {
    console.error(error);
  }
}

fetchPokemonList();