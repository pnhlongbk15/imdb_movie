export const baseConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    baseEmbed : "https://www.youtube.com/embed/",
    apiKey: 'fb3060d281e998809345ea7bc75170b1',
    originalImage: (backdrop_path) => `https://image.tmdb.org/t/p/original/${backdrop_path}`,
    w500Image: (poster_path) => `https://image.tmdb.org/t/p/w500/${poster_path}`
}