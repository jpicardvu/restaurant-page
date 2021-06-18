import Logo from '../dist/images/logo.jpg';
import HomeImage from '../dist/images/home.jpg';

const loadPage = (() => {
  const body = document.querySelector('#body');
  const page = document.querySelector('#page');
  
  const logo = new Image();  
  logo.src = Logo;
  logo.id = 'logo-image';
  page.appendChild(logo);
  
  const header = document.createElement('header');
  page.appendChild(header);

  for (let i = 0; i < 3; i++){
    const headerArray = ['Home', 'Menu', 'Contact'];
    const headerLabel = document.createElement('span');
    headerLabel.classList.add('header-labels');
    headerLabel.textContent = headerArray[i];
    header.appendChild(headerLabel);
  }

  const contentContainer = document.createElement('div');
  contentContainer.id = 'content-container';
  page.appendChild(contentContainer);

  const footer = document.createElement('footer');
  footer.textContent = 'Copyright © 2021 jpicardvu';
  footer.id = 'footer';
  body.appendChild(footer);

  return {page, contentContainer}
})();

const homePage = () => {
  const homeContent = document.createElement('div');
  homeContent.textContent = '\r\nFood fit for a king.\r\nMade with class since 1974.';
  homeContent.id = 'home-content';
  loadPage.contentContainer.appendChild(homeContent);
  
  const homeImage = new Image();
  homeImage.src = HomeImage;
  homeImage.id = 'home-image';
  loadPage.contentContainer.appendChild(homeImage);
};

const menuPage = () => {
  const menuContainer = document.createElement('div');
  menuContainer.id = 'test';
  loadPage.contentContainer.appendChild(menuContainer);

  for (let i = 0; i < 6; i++) {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    menuContent.textContent = 'zzzzzzzzzz';
    menuContainer.appendChild(menuContent);
  // diplsay  flex (etch) or grid (TTT)
  }

};

export {homePage, menuPage};



