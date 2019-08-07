import axios from "axios";

export default {
    getBooks: () => {
        return axios.get("/googlebooks/books");
    },
    searchBooks: (title) => {
        return axios.post("/search", {title: title});
    },
    addBookToDB: (bookData) => {
        return axios.post("/googlebooks/books", bookData);
    },
    deleteBook: (id) => {
        return axios.delete(`/googlebooks/books/${id}`);
    }
}