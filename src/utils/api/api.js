export const getAllScenes = async () => {
  try {
    const response = await fetch(
      "https://oneplayer-tech-test.herokuapp.com/scenes"
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
export const getCrew = async () => {
  try {
    const response = await fetch(
      "https://oneplayer-tech-test.herokuapp.com/crew"
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getBonusImages = async () => {
  try {
    const response = await fetch(
      "https://oneplayer-tech-test.herokuapp.com/bonusImages"
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
export const getSceneByTimecode = async (timecode) => {
  try {
    const response = await fetch(
      `https://oneplayer-tech-test.herokuapp.com/scene/${timecode}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
