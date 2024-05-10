import axios from "axios";

const API_URL = "http://localhost:5000";

/* 
    INSTRUCTION: 
    - Create a function to fetch pokemons from the API. 
    - API call may include query parameters for search and type.
*/

export const fetchPokemons = async (searchQuery, type) => {
    let params = {
        search: searchQuery,
        type: type
      };

      const query = new URLSearchParams(params);
        const response = await axios.get(`${API_URL}/pokemons?${query.toString()}`);
        return response.data;  
};

/* INSTRUCTION: Create a function to fetch types from the API. */

export const fetchTypes = async () => {
        const response = await axios.get(`${API_URL}/types`);
        return response.data;

};
