/*
    Ui sınıfı ile ekranda göserilecek olan kısımları belirliyoruz. 
*/
class UI {

   
    constructor() {
        this.container = document.getElementById('container');
        this.search = document.getElementById('search');
        this.modalContainer = document.getElementById('country-details');
    }

     /* Ülkelerin gösterildiği fonksiyon. Aynı zamanda "LocalSorage" ile gelen datayı hafızada tutuyoruz. Sürekli sorgu atmamak için.  */
    showCountry(countries) {
        localStorage.setItem("localCountries", JSON.stringify(countries));
        countries.forEach(country => {
            this.container.innerHTML += 
                `<div class="card-container" onclick="countryDetails('${country.name.common}')" data-bs-toggle="modal" data-bs-target="#countryDetails">
                    <img alt="${country.name.common}" src="${country.flags.png}">
                    <h2>${country.name.common}</h2>
                    <p>${country.capital}</p>
                </div>`;

        });
    }
    
     /* Ülkelerin bölgelerinin gösterildiği fonksiyon. Aynı zamanda "LocalSorage" ile gelen datayı hafızada tutuyoruz. Sürekli sorgu atmamak için.  */
    showRegion(countries) {
        localStorage.setItem("localCountries", JSON.stringify(countries.region));
        this.container.innerHTML = '';
        countries.region.forEach(country => {
            this.container.innerHTML += `
                <div class="card-container" onclick="countryDetails('${country.name.common}')" data-bs-toggle="modal" data-bs-target="#countryDetails">
                    <img alt="${country.name.common}" src="${country.flags.png}">
                    <h2>${country.name.common}</h2>
                    <p>${country.capital}</p>
                </div>`;
        });
    }

     /* Arama fonksiyonu localde arama yapıyoruz. Bölge araması ve genel arama ayrı ayrı çalışıyor. Bölge içinde arama mevcut.  */
    searchCountries() {
        let localCountriesList = JSON.parse(localStorage.getItem("localCountries"));
  
        let input = document.getElementById('search').value;
        input = input.toLowerCase();
    
        let container = document.querySelector('#container');
        container.innerHTML = ""
      
        let i = 0;
        for (i = 0; i < localCountriesList.length; i++) {
          let country = localCountriesList[i];
      
          if (country.name.common.toLowerCase().trim().includes(input)) {
            let countryHtml = document.createElement('div');
            countryHtml.classList = 'card-container';
            countryHtml.setAttribute('data-bs-toggle','modal');
            countryHtml.setAttribute('data-bs-target','#countryDetails');
            countryHtml.setAttribute('onclick', 'countryDetails("'+country.name.common+'")');
    
            countryHtml.innerHTML += 
              `<img alt="${country.name.common}" src="${country.flags.png}">
                <h2>${country.name.common}</h2>
                <p>${country.capital}</p>`;
    
            container.appendChild(countryHtml)
          }
        }
    }

     /* Ülkelerin detayının gösterildiği fonksiyon. Modal olarak öne açılır.  */
    detailCountry(country){
        const data = country.country[0];
        let languages = data.languages;

        this.modalContainer.innerHTML = '';
        this.modalContainer.innerHTML += 
            `<div class="details-content">
                <div class="image-content">
                    <img src="${data.flags.png}">
                </div>
                <div class="text-content">
                    <p><strong>Country Name : </strong>${data.name.common}</p>
                    <p><strong>Country Official : </strong>${data.name.official}</p>
                    <p><strong>Country Capital : </strong>${data.capital}</p>
                    <p><strong>Country Population : </strong>${data.population}</p>
                    <p><strong>Country Language : </strong>${Object.keys(languages).map(k => languages[k])}</p>
                    <p><strong>Google Map : </strong> <a href="${data.maps.googleMaps}" target="_blank">Map</a></p>
                </div> 
            </div>
            `;
    }

}





