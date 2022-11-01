 /* app.js dosyasında 2 tane sınıfı çağırıyoruz. */
const countries = new Countries;
const ui = new UI;


/* Sayfa açıldığında "counties" sınıfına gidip dönen verileri alıyoruz. Daha sonra "ui" sınıfına verileri gönderip ekranda gösteriyoruz. */
countries.getCountries()
  .then(({countries}) => {ui.showCountry(countries)} )
  .catch(err => console.log(err))
  .finally(() => document.getElementById('preload-container').style.display = 'none');

/* Selectbox değiştiğinde "counties" sınıfına gidip bölge verileri alıyoruz. Daha sonra "ui" sınıfına verileri gönderip ekranda gösteriyoruz. */
const selectRegion = () => {
    let searchBox = document.getElementById('search');
    searchBox.value = '';
    searchBox.focus();

    var regionSelected = document.getElementById("selectRegion").value;
    countries.getRegions(regionSelected)
    .then((countries) => ui.showRegion(countries) )
    .catch(err => console.log(err));
}

/* Arama input'u change olduğunda  "ui" sınıfına gidiyoruz ve ekranda değişiklikleri yapıyoruz. */
const searchCountry = () => {
   ui.searchCountries();
}

/* Ülkeye click olduğunda hangi ülke olduğunu alıyoruz. "Countries" sınıfına ülkeyi gönderip sorgu yapıyoruz. "ui" sınıfına gelen datayı atıp ekrana basıyoruz. */
const countryDetails = (event) => {
  countries.getCountryDetails(event)
  .then((countryDet) => ui.detailCountry(countryDet))
  .catch(err => console.log(err))
  .finally(() => document.getElementsByClassName('modal-preload')[0].style.display = 'none')
}


/* Model ile ilgili işlemleri yapıyoryz. Modeli boşalıyoruz. Beyaz bir preload ekliyoruz. */
var countryDetailsClose = document.getElementById('countryDetails')
countryDetailsClose.addEventListener('hidden.bs.modal', function (event) {
  document.getElementsByClassName('modal-preload')[0].style.display = 'block'
  document.getElementById('country-details').innerHTML = '';
})
