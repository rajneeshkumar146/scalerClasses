import { axiosInstance } from "./index";

// GET
export const getAllMovies = async () => {
    try {
        const response = await axiosInstance.get("api/movies/get-all-movies");
        return response.data;
    } catch (err) {
        console.log("Error while calling getAllMovies API: ", err);

    }
}

export const getMovieById = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/movies/get-movie/${id}`);
        return response.data;
    } catch (err) {
        console.log("Error while calling getMovieById API ", err);
    }
};

// POST
export const addMovie = async (value) => {
    try {
        const response = await axiosInstance.post("api/movies/add-movie", value);
        return response.data;
    } catch (err) {
        console.log("Error while calling getAllMovies API: ", err);
    }
}

export const deleteMovie = async (payload) => {
    try {
        const response = await axiosInstance.post("api/movies/delete-movie", payload);
        return response.data;
    } catch (err) {
        console.log("Error while calling deleteMovie API: ", err);
    }
};

// PUT
export const updateMovie = async (value) => {
    try {
        const response = await axiosInstance.put("api/movies/update-movie", value);
        return response.data;
    } catch (err) {
        console.log("Error while calling getAllMovies API: ", err);
    }
}