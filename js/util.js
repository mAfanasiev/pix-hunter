const getElementFromTemplate = (template) => {
  const container = document.createElement(`div`);

  container.innerHTML = template;

  return container;
};

const isObject = (value) => {
  return (typeof value === `object`) && !Array.isArray(value);
};

export {
  isObject,
  getElementFromTemplate,
};
