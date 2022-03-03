const clean = function() {
  const main = document.querySelector('main');
  while(main.firstChild) {
    main.removeChild(main.lastChild);
  }
};

export {
  clean
};
