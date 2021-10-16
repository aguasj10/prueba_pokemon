import {get} from '../services/http.js';
import store from '@/store';
const getPokemonList = async (limit) => {
     const pokemonList = [];
     for (var i = 1; i <= limit; i++) {
        try{
            const json = await get(i);
            const pokemon = {
                name: json.forms[0].name,
                height: json.height,
                weight: json.weight,                             
                url: json.sprites.front_default,
                isFavorite: false
            }
            pokemonList.push(pokemon);
        }catch(e){
            store.commit("setError", true);
            console.log("Controller", e);
            return e;
            
        }
    }
    store.commit('setAllPokemons', pokemonList);
}

export {getPokemonList}