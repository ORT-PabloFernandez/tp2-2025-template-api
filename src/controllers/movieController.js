import { getMovies, getMovieById } from "../services/movieService.js";

export const getAllMovies = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : undefined;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : undefined;
        const movies = await getMovies(page, pageSize);
        res.json(movies);
    } catch (error) {
        console.log("Error fetching movies: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getMovie = async (req, res) => {
    try {
        const movie = await getMovieById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Película no encontrada" });
        }
        res.json(movie);
    } catch (error) {
        console.log("Error fetching movie: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};