const artists = [
  {
    id: 1,
    artistName: 'Haider Ali',
    imageURL: './images/artist (1).svg',
    artistIntro: 'Haider Ali Professor of Entrepreneurial Legal Studies at Harvard Law School',
    artistDesc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },

  {
    id: 2,
    artistName: 'Nadia Khan',
    imageURL: './images/artist (2).svg',
    artistIntro: 'Nadia Khan Professor of Entrepreneurial Legal Studies at Harvard Law School',
    artistDesc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },

  {
    id: 3,
    artistName: 'Nabeel Ahmed',
    imageURL: './images/artist (3).svg',
    artistIntro: 'Nabeel Ahmed Professor of Entrepreneurial Legal Studies at Harvard Law School',
    artistDesc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },

  {
    id: 4,
    artistName: 'Otega Blessing',
    imageURL: './images/artist (4).svg',
    artistIntro: 'Otega Blessing Professor of Entrepreneurial Legal Studies at Harvard Law School',
    artistDesc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },

  {
    id: 5,
    artistName: 'Nouman Danish',
    imageURL: './images/artist (5).svg',
    artistIntro: 'Nnouman Danish Professor of Entrepreneurial Legal Studies at Harvard Law School',
    artistDesc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },

  {
    id: 6,
    artistName: 'Muhammad Owais',
    imageURL: './images/artist (6).svg',
    artistIntro: 'Muhammad Owais Professor of Entrepreneurial Legal Studies at Harvard Law School',
    artistDesc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
];
const body = document.getElementById('body');
const section = document.createElement('section');
section.classList.add('artistSection');
body.insertBefore(section, body.children[4]);
// body.appendChild(section);
const titleDiv = document.createElement('div');
titleDiv.classList.add('titleDiv');
section.appendChild(titleDiv);
const title = document.createElement('h4');
title.textContent = 'Featured Artists';
title.classList.add('titleArtistSection');
titleDiv.appendChild(title);
const emptyDiv = document.createElement('div');
emptyDiv.classList.add('borderBottom');
titleDiv.appendChild(emptyDiv);
const allArtists = document.createElement('div');
allArtists.classList.add('allArtists');
section.appendChild(allArtists);
let i = 2;
const showArtists = (i) => {
  artists.splice(0, i).map((artist) => {
    const artistDiv = document.createElement('div');
    artistDiv.classList.add('artistDiv');
    allArtists.appendChild(artistDiv);
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imgDiv');
    artistDiv.appendChild(imgDiv);
    const img = document.createElement('img');
    img.src = artist.imageURL;
    imgDiv.appendChild(img);
    const descDiv = document.createElement('div');
    descDiv.classList.add('descDiv');
    artistDiv.appendChild(descDiv);
    const artistName = document.createElement('h5');
    artistName.classList.add('artistName');
    artistName.textContent = artist.artistName;
    descDiv.appendChild(artistName);
    const artistIntro = document.createElement('p');
    artistIntro.classList.add('artistIntro');
    artistIntro.textContent = artist.artistIntro;
    descDiv.appendChild(artistIntro);
    const emptyDiv2 = document.createElement('div');
    emptyDiv2.classList.add('emptyDiv2');
    descDiv.appendChild(emptyDiv2);
    const artistDesc = document.createElement('p');
    artistDesc.classList.add('artistDesc');
    artistDesc.textContent = artist.artistDesc;
    descDiv.appendChild(artistDesc);
    return true;
  });
};
showArtists(i);
const moreBtn = document.createElement('buton');
moreBtn.classList.add('moreBtn');
moreBtn.innerHTML = 'More';
section.appendChild(moreBtn);
moreBtn.addEventListener('click', () => {
  section.removeChild(moreBtn);
  i = artists.length;
  showArtists(i);
});
const hamburger = document.querySelector('.hamburger');
const navbarItems = document.querySelector('.navbarItems');
const closeBtn = document.querySelector('.closeBtn');
const desktopNavbar = document.querySelector('.desktopNavbar');
const navbar = document.querySelector('.header');
hamburger.addEventListener('click', () => {
  navbarItems.classList.remove('hide');
  navbarItems.classList.add('mobileNavbarItems');
  desktopNavbar.classList.add('mobileNavbar');
  navbar.classList.add('overlay');
  hamburger.classList.add('hide');
  hamburger.classList.remove('fa-sharp', 'fa-solid', 'fa-bars', 'hamburger');
  closeBtn.classList.remove('hide');
  closeBtn.classList.add('fa-solid', 'fa-xmark', 'closeBtn');
});
closeBtn.addEventListener('click', () => {
  navbarItems.classList.add('hide');
  navbarItems.classList.remove('mobileNavbarItems');
  desktopNavbar.classList.remove('mobileNavbar');
  navbar.classList.remove('overlay');
  hamburger.classList.remove('hide');
  hamburger.classList.add('fa-sharp', 'fa-solid', 'fa-bars', 'hamburger');
  closeBtn.classList.remove('fa-solid', 'fa-xmark', 'closeBtn');
  closeBtn.classList.add('hide');
});
navbarItems.addEventListener('click', () => {
  navbarItems.classList.add('hide');
  navbarItems.classList.remove('mobileNavbarItems');
  desktopNavbar.classList.remove('mobileNavbar');
  navbar.classList.remove('overlay');
  hamburger.classList.remove('hide');
  closeBtn.classList.add('hide');
});
// Define the media query string
const mediaQuery = window.matchMedia('(min-width: 768px)');
// Define the function to perform when the media query matches
const doSomething = () => {
  hamburger.classList.remove('fa-sharp', 'fa-solid', 'fa-bars');
  showArtists(artists.length);
  window.onresize = () => window.location.reload();
};
// Call the function once to check if the media query matches initially
if (mediaQuery.matches) {
  doSomething();
}
// Add an event listener to perform the function when the media query matches
mediaQuery.addEventListener('change', (event) => {
  if (event.matches) {
    doSomething();
  }
});