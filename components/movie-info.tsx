import { API_URL } from "../app/(home)/page";

async function getMovies(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  //await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const response = await fetch(`${API_URL}/${id}`, {
    cache: "force-cache",
  });

  const data = await response.json();
  return data;
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovies(id);
    return <h6>{JSON.stringify(movie)}</h6>;
}
