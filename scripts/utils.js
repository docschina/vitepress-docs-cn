/**
 * The code all comes from Yunyoujun, Thanks.
 */

const fs = require("fs");
const path = require("path");
const { capitalize } = require("vue");

/**
 *
 * @param {string} dir
 */
function getPages(dir) {
  return fs.readdirSync(dir).filter((f) => {
    if (
      fs.statSync(path.join(dir, f)).isDirectory() &&
      fs.existsSync(path.join(dir, f, "index.md"))
    ) {
      return true;
    }

    return false;
  });
}

/**
 * 获取侧边栏
 * @param {string} folder 目录文件名
 * @param {string} title 标题
 */
function getSidebar(folder, title) {
  const pages = getPages(`docs/${folder}`);
  const sidebar = [
    {
      text: title,
      link: `/${folder}/`,
      children: [],
    },
  ];
  pages.forEach((page) => {
    sidebar[0].children.push({
      text: capitalize(page),
      link: `/${folder}/${page}/`,
    });
  });
  return sidebar;
}

module.exports = {
  getSidebar,
};
