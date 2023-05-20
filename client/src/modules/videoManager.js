const baseUrl = '/api/video';

export const getVidsByUserId = (id) => {
  return fetch(baseUrl).then((res) => res.json())
    (`${baseUrl}/users/=${id}`);
}

export const getAllVideos = () => {
  return fetch(baseUrl).then((res) => res.json())
};

export const getAllVideosWithComments = () => {
  return fetch(`${baseUrl}/VideoComments`)
    .then((res) => res.json())
};
export const searchVideos = (content, bool) => {
  console.log(content,"content", bool)
  return fetch(`${baseUrl}/search?q=${content}&sortDesc=${bool}`)
    .then((res) => res.json())
};


export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};