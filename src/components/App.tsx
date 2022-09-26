import { Route, Routes } from "react-router-dom";
import { Layout } from "./";
import { Section } from "./ui/Section";
import { setLazyRoute } from "../utils";

const HomePage = setLazyRoute("HomePage");
const MoviesPage = setLazyRoute("MoviesPage");
const MovieDetailsPage = setLazyRoute("MovieDetailsPage");
const NotFoundPage = setLazyRoute("NotFoundPage");

const App = () => (
  <Section>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Section>
);

export default App;
