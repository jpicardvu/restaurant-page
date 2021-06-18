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

  const footer = document.createElement('footer');
  footer.textContent = 'Copyright © 2021 jpicardvu';
  footer.id = 'footer';
  body.appendChild(footer);


  return {page}
})();

const homePage = () => {;
  const homeContainer = document.createElement('div');
  homeContainer.id = 'home-container';

  const homeContent = document.createElement('div');
  homeContent.textContent = '\r\nFood fit for a king.\r\nMade with class since 1974.';
  homeContent.id = 'home-content';
  homeContainer.appendChild(homeContent);
  
  const homeImage = new Image();
  homeImage.src = HomeImage;
  homeImage.id = 'home-image';
  homeContainer.appendChild(homeImage);

  loadPage.page.insertBefore(homeContainer, loadPage.page.children[2]);
  //loadPage.page.appendChild(homeContainer);
}

export {homePage};



