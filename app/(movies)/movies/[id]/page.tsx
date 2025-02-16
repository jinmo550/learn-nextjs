import { Suspense } from "react";
import MovieInfo, { getMovies } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// ✅ PageProps 없이 직접 params 타입 정의
export async function generateMetadata({ params }) {
  const movie = await getMovies(params.id);
  return {
    title: movie.title,
  };
}

export default function MoviesDetailPage({ params }) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={params.id} />
      </Suspense>
    </div>
  );
}
