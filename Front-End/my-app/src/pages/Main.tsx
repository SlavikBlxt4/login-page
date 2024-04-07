import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import '../css/App.css'; // Asegúrate de importar el archivo CSS correspondiente

type MainProps = {
  setPage: Dispatch<SetStateAction<string>>;
};

const Main: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [movies, setMovies] = useState<any[]>([]); // Asegúrate de definir correctamente el tipo de los objetos de película

  useEffect(() => {
    fetchCategories();
    fetchMovies();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3000/categoria');
      const data = await response.json();
      const categoryNames = data.map((category: any) => category.nombrecat);
      setCategories(categoryNames);
    } catch (error) {
      console.error('Error fetching category data:', error);
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:3000/pelicula');
      const movieData = await response.json();
      setMovies(movieData);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  const renderMovies = (filteredMovies: any[]) => {
    return filteredMovies.map(movie => (
      <div key={movie.id} className="card">
        <div id="seccionSuperior">
          <button className="star-container" onClick={() => toggleFavouriteState(movie.id)}>
            <img
              id={`star-icon${movie.id}`}
              src={localStorage.getItem(`movie_${movie.id}`) === 'favorited' ? "estrella rellena.png" : "estrella.png"}
              alt="Estrella vacía"
              data-filled={localStorage.getItem(`movie_${movie.id}`) === 'favorited'}
            />
          </button>
        </div>
        <div id="seccionInferior">
          <h3>{movie.nombre}</h3>
          <div className="description">{movie.descripcion}</div>
        </div>
      </div>
    ));
  };

  const toggleFavouriteState = (movieId: string) => {
    const isMovieFavorited = localStorage.getItem(`movie_${movieId}`) === 'favorited';
    if (isMovieFavorited) {
      localStorage.removeItem(`movie_${movieId}`);
    } else {
      localStorage.setItem(`movie_${movieId}`, 'favorited');
    }
    // Actualizar el estado para que React vuelva a renderizar
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === movieId
          ? {
              ...movie,
              favorited: !isMovieFavorited
            }
          : movie
      )
    );
  };

  return (
    <div className="cuerpo">
      <div className="categories">
        {/* Aquí puedes renderizar los botones de categorías según la lógica que desees */}
      </div>
      <div className="movies">
        {renderMovies(movies)}
      </div>
    </div>
  );
};

export default Main;
