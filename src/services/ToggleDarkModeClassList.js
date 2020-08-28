const ToggleDarkModeClassList = (status) => {
  let appElement = document.querySelector(".app");
  if (status == 0) return appElement.classList.add("dark-mode");
  return appElement.classList.remove("dark-mode");
};

export default ToggleDarkModeClassList;
