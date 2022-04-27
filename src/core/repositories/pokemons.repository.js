const { URL_API_BASE } = require("../constants/index");
const axios = require("axios");

const getData = async (url) => {
  let result = await axios.get(url);
  return result.data;
};

const getPokemons = async () => {
  const requestPokemons = await getData(URL_API_BASE + "/pokemon");

  let pockemons = [];
  for (let item of requestPokemons.results) {
    let pockemon = {
      name: item.name,
      id: item.id,
    };

    const requestDetails = await getDetails(item.url);
    pockemon = { ...pockemon, ...requestDetails };
    pockemons.push(pockemon);
  }
  console.log(pockemons);
  return pockemons;
};

const getDetails = async (url) => {
  const requestDetails = await getData(url);
  let detils = {
    base_experience: requestDetails.base_experience,
  };
  let abilities = [];
  for (const item of requestDetails.abilities) {
    let abilityDetails = await getAbilityDetails(item.ability.url);
    let ability = { name: item.ability.name, ...abilityDetails };
    abilities.push(ability);
  }
  detils.abilities = abilities;
  detils.location_area_encounters = await getLocationsArea(
    requestDetails.location_area_encounters
  );
  detils.number = requestDetails.game_indices[0].game_index;
  detils.image = requestDetails.sprites.other.home.front_default;
  detils.stats = requestDetails.stats.map((item) => {
    return {
      base_stat: item.base_stat,
      name: item.stat.name,
    };
  });
  return detils;
};

const getAbilityDetails = async (url) => {
  const requestAbilities = await getData(url);
  delete requestAbilities.effect_entries[1].language;
  return requestAbilities.effect_entries[1];
};

const getLocationsArea = async (url) => {
  const requestLocationsArea = await getData(url);
  let locationsArea = requestLocationsArea.map(
    (item) => item.location_area.name
  );
  return locationsArea;
};

export default getPokemons;
