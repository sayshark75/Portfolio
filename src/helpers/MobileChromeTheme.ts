let themeMeta = document.querySelector(`meta[name="theme-color"]`);

const changeThemeMeta = (type: string) => {
  if (themeMeta) {
    const color = localStorage.getItem("chakra-ui-color-mode");
    themeMeta.setAttribute("content", color === "light" ? type : "#000000");
  }
};

export default changeThemeMeta;
