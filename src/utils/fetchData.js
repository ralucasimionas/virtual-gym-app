export const exerciseOptions = {
  method: "GET",
  headers: {
    params: { limit: "50" },
    "X-RapidAPI-Key": "6da0634f9bmsh8f6c49431c54982p165abfjsnfd18fedc67ba",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6da0634f9bmsh8f6c49431c54982p165abfjsnfd18fedc67ba",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
