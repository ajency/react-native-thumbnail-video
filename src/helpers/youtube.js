export const getVideoId = url => {
  const result = url.split(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);
  const videoIdWithParams = result[7];

  if (videoIdWithParams !== undefined) {
    const cleanVideoId = videoIdWithParams.split(/[^0-9a-z_-]/i)[0];

    return cleanVideoId;
  }

  return null;
};
