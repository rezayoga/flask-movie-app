export default class Movie {
  constructor(
    id,
    user_id,
    genre,
    title,
    directors,
    actors,
    year,
    billboard,
    created_at
  ) {
    this.id = id;
    this.user_id = user_id;
    this.genre = genre;
    this.title = title;
    this.directors = directors;
    this.actors = actors;
    this.year = year;
    this.billboard = billboard;
    this.created_at = created_at;
  }
}
