import React, { useState } from "react";
import { getPokemons } from "../../core/repositories/pokemons.repository";

const useAsyncHook = (search) => {
  let [pokemons, setPokemons] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");

  React.useEffect(() => {
    async function fetchPokemons() {
      try {
        setLoading(true);
        const response = await getPokemons();
        setPokemons(response);
      } catch (error) {
        setError("Ocurrio un error mientrase se obtenian los pokemones");
      }
      setLoading(false);
    }
    fetchPokemons();
  }, [search]);
  return [pokemons, error, loading];
};

export default useAsyncHook;
