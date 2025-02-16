import styles from "../styles/movie-info.module.css"

export async function getMovies(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"
  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`, {
    cache: "force-cache",
  });
  const data = await response.json();
  return data;
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovies(id);
    return <div className={styles.container}>
      <img src={movie.poster_path} className={styles.poster}/>
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.HomePage} target={"_blank"}>
          Homepage &rarr;  
        </a>    
      </div>
    </div>
}
