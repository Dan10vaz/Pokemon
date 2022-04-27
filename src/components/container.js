import React from "react";

const PokemonDetils = (props) => {
  const pokemon = props.pokemon;
  return (
    <div>
      <div class="card" style={{ width: "18rem;" }}>
        <img
          class="card-img-top mx-auto"
          src={pokemon.image}
          alt={pokemon.name}
          style={{ width: "60%" }}
        ></img>
        <div class="card-body">
          <h3 class="card-title d-flex justify-content-center ">
            <strong>{pokemon.name}</strong>
          </h3>
          <strong class="d-flex justify-content-center">
            Number: {pokemon.number}
          </strong>

          <b> stats: </b>

          {pokemon.stats.map((stat) => (
            <li>
              <p style={{ display: "inline", fontSize: "10pt" }}>
                {" "}
                {stat.name}
              </p>{" "}
              : <b style={{ fontSize: "11pt" }}>{stat.base_stat}</b>
            </li>
          ))}
          <br />
          <b> Abilities: </b>
          <ul>
            {pokemon.abilities.map((ability) => (
              <li>
                {ability.name}
                <p>{ability.effect}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetils;
