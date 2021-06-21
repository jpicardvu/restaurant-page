import Logo from './images/logo.jpg'; //done for the sake of trying out stat image imports, importAll function + "img.src=" used in createMenuItem() for efficiency;
import HomeImage from './images/home.jpg';
console.log('test')
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
};
const importedImages = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const loadPage = (() => { //webpack runs through the entire script before bundling (as proven by console.log('test') in line 3 executing), so this modular function is run even without importing to index.js
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
    console.log('test');    
    headerLabel.onclick = () => {
      switch(i) {
        case 0:
          homePage();
          break;
        case 1:
          menuPage();
          break;
        case 2:
          contactPage();
          break;
      }
      //if (contentContainer.style.opacity == 0) {
      //  contentContainer.style.opacity = 1;
      //}
      //else {
      //  contentContainer.style.opacity = 0;       
      //}
    }

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
  loadPage.contentContainer.textContent = '';

  const homeContent = document.createElement('div');
  homeContent.textContent = '\r\nFood fit for a king.\r\nMade with class since 1974.';
  homeContent.id = 'home-content';
  loadPage.contentContainer.appendChild(homeContent);
  
  const homeImage = new Image();
  homeImage.src = HomeImage;
  homeImage.id = 'home-image';
  loadPage.contentContainer.appendChild(homeImage);
};

const contactPage = () => {
  loadPage.contentContainer.textContent = '';
  
  const contactContent = document.createElement('div');
  contactContent.textContent = '\r\nPhone: 1-800-123-4567.\r\nAddress: 123 45th Street, Manhattan, NY 10036, United States';
  contactContent.id = 'contact-content';
  loadPage.contentContainer.appendChild(contactContent);

  const mapImg = document.createElement('img');
  mapImg.src = importedImages['map.png'];
  mapImg.id = 'map-img';
  mapImg.classList.add('load');
  loadPage.contentContainer.appendChild(mapImg);

};

const menuPage = () => {
  loadPage.contentContainer.textContent = '';

  const menuContent = document.createElement('div');
  menuContent.id = 'menu-content';
  
  const steak = createMenuItem('USDA Prime Steak', 
                                'Triple AAA grain-fed beef, served with a side of garlic mashed potatoes and steamed vegetables',
                                '$99');
  const lobster = createMenuItem('Lobster Soup', 
                                'Award-winning lobster soup made with house secret recipe',
                                '$29');
  const oysters = createMenuItem('Oysters', 
                                '6 fresh shucked malpeque oysters, served with house mignonoette suace and a splash of lemon ',
                                '$25');
  const salmon = createMenuItem('Grilled Salmon', 
                                'Fresh Atlantic salmon grilled to perfection, served with a side of basmati rice and asparagus',
                                '$69');
  
  menuContent.appendChild(steak);
  menuContent.appendChild(lobster);
  menuContent.appendChild(oysters);
  menuContent.appendChild(salmon);

  loadPage.contentContainer.appendChild(menuContent);
};

const createMenuItem = (name, description, price) => {
  const itemDiv = document.createElement('div');
  const itemDivLeft = document.createElement('span');
  const itemDivRight = document.createElement('span');
  itemDiv.appendChild(itemDivLeft);
  itemDiv.appendChild(itemDivRight);

  const itemImg = document.createElement('img');
  itemImg.src = importedImages[name.replace(/ /g, '-').toLowerCase() + '.jpg'];
  itemImg.classList.add('item-img');
  itemDivLeft.appendChild(itemImg);
  
  const nameDiv = document.createElement('div');
  nameDiv.textContent = name;
  itemDivRight.appendChild(nameDiv);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.textContent = description;
  itemDivRight.appendChild(descriptionDiv);
  
  const priceDiv = document.createElement('div');
  priceDiv.textContent = price;
  itemDivRight.appendChild(priceDiv);

  itemDiv.classList.add('menu-items');

  return itemDiv
}

export {homePage};