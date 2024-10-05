export const fetchNews = async (category: string = "", search: string = "") => {
    try {
        const response = await fetch(`https://news-api-next-js-kappa.vercel.app/api/news?category=${category}&search=${search}`);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error("Error fetching news data", error);
        return []
    }
}