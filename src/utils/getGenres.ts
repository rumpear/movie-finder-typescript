type TGetGenres = (genres: { id: number; name: string }[]) => string;

export const getGenres: TGetGenres = (genres) => {
  return genres.map((genre) => genre.name).join(", ");
};
