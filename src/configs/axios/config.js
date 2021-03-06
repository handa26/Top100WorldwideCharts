import axios from "axios";

const API_KEY = "bef39597cfmsh31281c5bac28f78p1fcfcdjsn193413645389";
const request = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  timeout: 30000,
  headers: { "x-rapidapi-key": API_KEY }
});

export const getCharts = chartId => {
  let chart = request
    .get(`playlist/${chartId}`)
    .then(res => res.data)
    .catch(error => error.message);
  return chart;
};

export const getArtist = artistId => {
  let artist = request
    .get(`artist/${artistId}`)
    .then(res => res.data)
    .catch(error => error.message);
  return artist;
};

export const getArtistTracks = artistId => {
  let artist = request
    .get(`artist/${artistId}/top?limit=50`)
    .then(res => res.data.data)
    .catch(error => error.message);
  return artist;
};
