/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["image.tmdb.org", "secure.gravatar.com"],
    },
    async rewrites() {
        return [
            {
                source: "/api/movies",
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
            },
            {
                source: "/api/popular/:page",
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=:page`,
            },
            {
                source: "/api/movies/:id",
                destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
            },
            {
                source: "/api/reviews/:id",
                destination: `https://api.themoviedb.org/3/movie/:id/reviews?api_key=${API_KEY}`,
            },
            {
                source: "/api/videos/:id",
                destination: `https://api.themoviedb.org/3/movie/:id/videos?api_key=${API_KEY}`,
            },
            {
                source: "/api/similar/:id",
                destination: `https://api.themoviedb.org/3/movie/:id/similar?api_key=${API_KEY}`,
            },
            {
                source: "/api/search/:keyword",
                destination: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=:keyword`,
            },
            {
                source: "/api/list/:page",
                destination: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=:page`,
            },
            {
                source: "/api/genre",
                destination: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
            },
        ];
    },
};

module.exports = nextConfig;
