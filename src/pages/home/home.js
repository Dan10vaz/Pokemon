import React, { useState } from "react";
import PokemonCard from "../../components/pokemon-card";
import useAsyncHook from "../../core/hooks/hooks";
import PokemonLoading from "../../components/pokemons-loading";
import PokemonDetils from "../../components/container";

const Home = () => {
  const [pokemons, error, loading] = useAsyncHook();
  const [indexPokemonSelected, setIndexPokemonSelected] = useState(0);

  let listPokemon = [];

  if (pokemons.length > 0) {
    listPokemon = pokemons.map((pokemon, index) => (
      <div class="col-md-4">
        {" "}
        <PokemonCard
          pokemon={pokemon}
          index={index}
          setIndexPokemonSelected={setIndexPokemonSelected}
        />{" "}
      </div>
    ));
  }

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar Pokemon"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>

      <div class="container-fluid">
        <div class="row">
          <div class="col-md">
            <div class="row">
              {" "}
              {loading ? (
                PokemonLoading
              ) : error ? (
                <h1>PokemonErrors</h1>
              ) : (
                listPokemon
              )}
            </div>
          </div>
          <div class="col-md">
            {loading ? (
              PokemonLoading
            ) : error ? (
              <h1>PokemonErrors</h1>
            ) : (
              <PokemonDetils pokemon={pokemons[indexPokemonSelected]} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
