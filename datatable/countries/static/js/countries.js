/*
    Countries sınıfı ile sorguların yapıldığı fonksiyonlar oluşturuyoruz.
*/

class Countries {
    
    /* Constructor fonksiyonu ile url adreslerini değişkenlere atıyoruz */
    constructor() {
        this.getCountriesUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,flags,languages';
        this.getRegionUrl = 'https://restcountries.com/v3.1/';
        this.getCountryDetailsUrl = 'https://restcountries.com/v3.1/name/';
    }

    /* Asenkron olarak ülkelerin verilerini alıyoruz ve dönüyoruz. */
    async getCountries() {
        const countriesRes = await fetch(`${this.getCountriesUrl}`);
        const countries = await countriesRes.json();
        return {
            countries
        }
    }

    /* Asenkron olarak ülkelerin bölgelerinin verilerini alıyoruz ve dönüyoruz. */
    async getRegions(regionSelected) {
        const regionRes = await fetch(`${this.getRegionUrl}` + `${regionSelected == 'all' ? 'all' : 'region/'+regionSelected}`);
        const region = await regionRes.json();
        return {
            region
        }
    }

    /* Asenkron olarak ülkelerin detaylarını alıyoruz ve dönüyoruz. */
    async getCountryDetails(countryName) {
        const countryRes = await fetch(`${this.getCountryDetailsUrl}` + `${countryName}`);
        const country = await countryRes.json();
        return {
            country
        }
    }
    
}