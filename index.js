const artists = [
    {
        id : 1,
        artistName : 'Yochai Benkler',
        imageURL : './images/artist_01.svg',
        artistIntro : 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        artistDesc : 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },

    {
        id : 2,
        artistName : 'Yochai Benkler',
        imageURL : './images/artist_04.svg',
        artistIntro : 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        artistDesc : 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },

    {
        id : 3,
        artistName : 'Yochai Benkler',
        imageURL : './images/artist_01.svg',
        artistIntro : 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        artistDesc : 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },

    {
        id : 4,
        artistName : 'Yochai Benkler',
        imageURL : './images/artist_04.svg',
        artistIntro : 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        artistDesc : 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },

    {
        id : 5,
        artistName : 'Yochai Benkler',
        imageURL : './images/artist_01.svg',
        artistIntro : 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        artistDesc : 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },

    {
        id : 6,
        artistName : 'Yochai Benkler',
        imageURL : './images/artist_04.svg',
        artistIntro : 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        artistDesc : 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },
]
const body = document.getElementById ('body');
const section = document.createElement('section');
section.classList.add('artistSection');
body.appendChild(section);
const titleDiv = document.createElement('div');
titleDiv.classList.add('titleDiv');
section.appendChild(titleDiv);
const title = document.createElement('h4')
title.textContent = "Featured Artists";
title.classList.add('titleArtistSection');
titleDiv.appendChild(title);
const emptyDiv = document.createElement ('div')
emptyDiv.classList.add('borderBottom');
titleDiv.appendChild(emptyDiv);
let i = 2;
const showArtists = () => {
artists.splice(0,i).map((artist)=> {
const artistDiv = document.createElement('div');
artistDiv.classList.add('artistDiv');
section.appendChild(artistDiv);
const imgDiv = document.createElement('div');
imgDiv.classList.add('imgDiv');
artistDiv.appendChild(imgDiv);
const img = document.createElement("img");
img.src = artist.imageURL;
imgDiv.appendChild(img);
const descDiv = document.createElement('div');
descDiv.classList.add('descDiv');
artistDiv.appendChild(descDiv);
const artistName = document.createElement('h5');
artistName.classList.add('artistName');
artistName.textContent= artist.artistName;
descDiv.appendChild(artistName);
const artistIntro = document.createElement('p');
artistIntro.classList.add('artistIntro');
artistIntro.textContent= artist.artistIntro;
descDiv.appendChild(artistIntro);
const emptyDiv2 = document.createElement('div');
emptyDiv2.classList.add('emptyDiv2');
descDiv.appendChild(emptyDiv2);
const artistDesc = document.createElement('p');
artistDesc.classList.add('artistDesc');
artistDesc.textContent= artist.artistDesc;
descDiv.appendChild(artistDesc);
});
}
showArtists();
const moreBtn = document.createElement('buton');
moreBtn.classList.add('moreBtn');
moreBtn.innerHTML = 'More';
section.appendChild(moreBtn);
moreBtn.addEventListener('click', () => {
    section.removeChild(moreBtn);
    i = artists.length;
    showArtists();
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