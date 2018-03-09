/**
 * 计算高度
 */
const mainHieght = () => {
  setTimeout(() => {
    const top = document.querySelector('.i-topbar');
    const main = document.querySelector('.i-main');
    const bodyHeight = document.documentElement.clientHeight;
    // main.style.height = `${bodyHeight - top.clientHeight}px`;
    
    // 计算 i-c-box 高度
    
    const breadcrumb = document.querySelector('.breadcrumb');
    const box = document.querySelector('.i-c-box');
    box.style.height = `${bodyHeight - top.clientHeight - 40 - breadcrumb.clientHeight}px`;
  });
}

export default mainHieght
