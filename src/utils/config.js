// Dados de configuração para a API do Spotify
export const authEndpoint = "https://accounts.spotify.com/authorize";

export const clientId = "df9d920214f3437b8440a2ed3548f11d";
export const redirectUri = "http://localhost:3000/home";
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
];