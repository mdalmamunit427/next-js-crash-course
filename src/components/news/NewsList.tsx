 "use client"

import { fetchNews } from '@/lib/fetchNews';
import { NewsItem } from '@/types/news';
import React, { useEffect, useState } from 'react'
import NewsCard from '../shared/NewsCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

const NewsList = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [search, setSearch] = useState<string>("");
    const [category, setCategory] = useState<string>("")

    useEffect(() => {
        const getNews = async () => {
            const data = await fetchNews(category, search);
            setNews(data);
        };
        getNews();
    }, [category, search]);

    console.log(news)
  return (
    <div>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 mb-5'>
            <SearchBar onSearch={setSearch}/>

            <CategoryFilter onCategoryChange={setCategory}/>
        </div>

        {/* news cards  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between'>
            {
                news.map((item) => (
                    <NewsCard key={item?._id} item={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default NewsList