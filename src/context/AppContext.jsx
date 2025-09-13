import { createContext, useEffect, useState } from "react";
import { BaseUrl } from "../BaseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);



    const fetchData = async (page = 1) => {
        setLoading(true);
        let url = `${BaseUrl}?page=${page}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);

        } catch (e) {
            console.log("something went wrong while fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }
    


    const handlePageChange = (page) => {
        setPage(page);
        fetchData(page);
    }


    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchData,
        handlePageChange
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}