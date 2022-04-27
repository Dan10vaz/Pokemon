
const useAsyncHook(searchBook) {
const [pokemons, setPokemons] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

React.useEffect(() => {
  fetchPokemons = async () => {
    try {
      setLoading(true);
      const response = await getPokemons();
      setPokemons(response);
    } catch (error) {
      setError("Ocurrio un error mistras se obtnian los datos");
      setLoading(false);
    }
  };
});

return [result, loading];
