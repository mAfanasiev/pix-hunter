const getElementFromTemplate = (template) => {
  const container = document.createElement(`div`);

  container.innerHTML = template;

  return container.children[0].content || container.children[0];
};

const showScreen = (screen) => {
  const container = document.querySelector(`#main`);

  container.innerHTML = ``;
  container.appendChild(screen);
};

const nextPage = (container) => (element) => (nextScreen) => {
  container.querySelector(element).addEventListener(`click`, () => (showScreen(nextScreen)));
};

export {
  getElementFromTemplate,
  showScreen,
  nextPage,
};