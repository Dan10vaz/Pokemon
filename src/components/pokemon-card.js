const PokemonCard = (props) => {
  const { pokemon, index, setIndexPokemonSelected } = props;

  return (
    <div>
      <div class="card" style={{ width: "18rem;" }}>
        <img
          class="card-img-top"
          src={pokemon.image}
          alt="Card image cap"
        ></img>
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-center">
            {pokemon.name}
          </h5>
          <strong class="d-flex justify-content-center">
            Number: {pokemon.number}
          </strong>
          <br />
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
          <a
            onClick={() => {
              setIndexPokemonSelected(index);
            }}
            class="btn btn-primary d-flex justify-content-center"
          >
            Show Datils
          </a>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
