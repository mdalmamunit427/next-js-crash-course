import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import NewsLetter from "@/components/shared/NewsLetter";
import { NewsItem } from "@/types/news";

const Home = async() => {
  const data = await fetch('https://news-api-next-js-kappa.vercel.app/api/news', {
    cache: 'force-cache'
  });
  const news = await data.json();
  
  return (
    <div className="py-12">
        <Banner/>

        <div className="my-12">
          <h2 className="text-2xl font-bold mb-8">Latest News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              news.slice(0, 3).map((item: NewsItem) => (
                <NewsCard key={item?._id} item={item}/>
              ))
            }
          </div>
        </div>

        <NewsLetter/>
    </div>
  );
}

export default Home