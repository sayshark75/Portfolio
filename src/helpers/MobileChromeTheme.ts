const themeMeta = document.querySelector(`meta[name="theme-color"]`);

const changeThemeMeta = (color: string) => {
  if (themeMeta) {
    themeMeta.setAttribute("content", color);
  }
};

export default changeThemeMeta;
