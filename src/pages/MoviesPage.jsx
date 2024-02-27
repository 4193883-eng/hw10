import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {queryMovies} from "../services/moviesService.js";

function MoviesPage() {
  const [query, setQuery] = useSearchParams('')
  const [searchResults, setSearchResults] = useState(null)

  useEffect(() => {
    queryMovies(query).then((data) => {
      setSearchResults(data)
    })
  }, [query]);

  return <div>
    <h1>MoviesPage</h1>
    <InputComponent setSearchParam={setQuery}/>
    {console.log(searchResults)}
  </div>;
}

function InputComponent({setSearchParam}) {
  const [input, setInput] = useState('')

  return <div><input type="text" value={input} onChange={(e) => setInput(e.target.value)}/><button onClick={() => setSearchParam(input)}>Search</button> </div>
}

export default MoviesPage;
