import Stack from "@mui/material/Stack";
import { COMMON_TITLES } from "src/constant";
import TopTrailer from "src/components/TopTrailer";
import { useGetGenresQuery } from "src/store/slices/genre";
import { MEDIA_TYPE } from "src/types/Common";
import { CustomGenre, Genre } from "src/types/Genre";
import SliderRowForGenre from "src/components/VideoSlider";
import MainLoadingScreen from "src/components/MainLoadingScreen";

function HomePage() {
  const {
    data: genres,
    isLoading,
    isSuccess,
  } = useGetGenresQuery(MEDIA_TYPE.Movie);
  if (isLoading) {
    return <div style={{ color: "white" }}><MainLoadingScreen /></div>;
  } else if (isSuccess && genres && genres.length > 0) {
    return (
      <Stack spacing={2} sx={{ bgcolor: "background.default" }}>
        <TopTrailer mediaType={MEDIA_TYPE.Movie} />
        {[...COMMON_TITLES, ...genres].map((genre: Genre | CustomGenre) => (
          <SliderRowForGenre
            key={genre.id || genre.name}
            genre={genre}
            mediaType={MEDIA_TYPE.Movie}
          />
        ))}
      </Stack>
    );
  }
  return <div>Something went wrong</div>;
}

export default HomePage;
