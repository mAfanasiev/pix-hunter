const getElementFromTemplate = (template) => {
  const container = document.createElement(`div`);

  container.innerHTML = template;

  return container;
};

const changeView = (screen) => {
  const container = document.querySelector(`#main`);

  container.innerHTML = ``;
  container.appendChild(screen);
};

const nextPage = (container) => (element) => (nextScreen) => {
  container.querySelector(element).addEventListener(`click`, () => (changeView(nextScreen)));
};

export {
  getElementFromTemplate,
  changeView,
  nextPage,
};
