import adaptServerData from './modules/game/adapter';

const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
const DEFAULT_NAME = `INCOGNITO`;
const APP_ID = 22101985;

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }

  throw new Error(`${response.status}: ${response.statusText}`);
};

const toJSON = (response) => response.json();

const loadImage = (url) => {
  return new Promise((onSuccess, onError) => {
    const img = new Image();
    img.src = url;

    img.onload = () => {
      onSuccess(url);
    };

    img.onError = (error) => {
      onError(error);
    };
  });
};

const loadQuestions = (data) => {
  const answers = [];

  data.forEach((it) => {
    return answers.push(...it.answers);
  });

  const images = answers.map((answer) => {
    return loadImage(answer.image.url);
  });

  return Promise.all(images)
      .then(() => {
        return Promise.resolve(data);
      })
      .catch((err) => {
        return err;
      });
};

export default class Loader {
  static loadData() {
    return window.fetch(`${SERVER_URL}/questions`)
        .then(checkStatus)
        .then(toJSON)
        .then(loadQuestions)
        .then(adaptServerData);
  }

  static saveResults(data, name = DEFAULT_NAME) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return window.fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`, requestSettings)
        .then(checkStatus);
  }

  static loadResults(name = DEFAULT_NAME) {
    return window.fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`)
        .then(checkStatus)
        .then(toJSON);
  }
}
