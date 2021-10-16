import axios from "axios";
const httpAPI = "https://pokeapi.co/api/v2/pokemon";


const get = async (endpoint) => {
    try {
        const url = `${httpAPI}/${endpoint}`;      
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        
        console.log("Service ", err);
        return err;
    }
}

export { get };