const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c2e5de5d532df045b1aec6d1e45c653c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;