export const removeClassFromElements = className => {
  Array.from(document.querySelectorAll(`.${className}`)).forEach(element =>
    element.classList.remove(className),
  );
};
