import Item from "./item";
const itemy = [
    {
       img: 'https://m.media-amazon.com/images/I/61SYYrsgd5S._AC_UF1000,1000_QL80_.jpg',
       producent: 'NVIDIA',
       model: 'GeForce RTX 3080',
       Pojemność_pamięci: '10 GB GDDR6X',
       Rodzaj_pamięci: 'GDDR6X',
       cena: '2499 zł',
    
       szczegółowe: {
        Maksymalna_rozdzielczość: '7680x4320',
        Przepustowość_pamięci: '760 GB/s',
        taktowanie_układu: '1440 MHz',
        taktowanie_układu_Turbo: '1710 MHz'
       }
    },

    {
       img: 'https://img.pccomponentes.com/articles/36/364293/1107-gigabyte-amd-radeon-rx-6700-xt-gaming-oc-12gb-gddr6.jpg',
       producent: 'AMD',
       model: 'Radeon RX 6700 XT',
       Pojemność_pamięci: '12 GB GDDR6',
       Rodzaj_pamięci: 'GDDR6',
       cena: '1899 zł',
       szczegółowe: {
        Maksymalna_rozdzielczość: '7680x4320',
        Przepustowość_pamięci: '384 GB/s',
        taktowanie_układu: '2321 MHz',
        taktowanie_układu_Turbo: '2581 MHz'
       },
    },
    {
       img: 'https://cdn.al.to/i/setup/images/prod/big/product-new-big,,2021/12/pr_2021_12_1_13_47_16_275_04.jpg',
       producent: 'ASUS',
       model: 'ROG Strix GeForce RTX 3090',
       Pojemność_pamięci: '24 GB GDDR6X',
       Rodzaj_pamięci: 'GDDR6X',
       cena: '3499 zł',
        
       szczegółowe: {
        Maksymalna_rozdzielczość: '7680x4320',
        Przepustowość_pamięci: '936 GB/s',
        taktowanie_układu: '1725 MHz',
        taktowanie_układu_Turbo: '1860 MHz'
       }
    },

    {
       img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/7/pr_2019_7_1_13_54_6_21_04.jpg',
       producent: 'EVGA',
       model: 'GeForce GTX 1660 Ti',
       Pojemność_pamięci: '6 GB GDDR6',
       Rodzaj_pamięci: 'GDDR6',
       cena: '1099 zł',
        
       szczegółowe: {
        Maksymalna_rozdzielczość: '7680x4320',
        Przepustowość_pamięci: '288 GB/s',
        taktowanie_układu: '1500 MHz',
        taktowanie_układu_Turbo: '1845 MHz'
       }
    },

    {
       img: '',
       producent: 'MSI',
       model: 'GeForce GTX 1050 Ti',
       Pojemność_pamięci: '4 GB GDDR5',
       Rodzaj_pamięci: 'GDDR5',
       cena: '699 zł',
        
       szczegółowe: {
        Maksymalna_rozdzielczość: '7680x4320',
        Przepustowość_pamięci: '112 GB/s',
        taktowanie_układu: '1341 MHz',
        taktowanie_układu_Turbo: '1455 MHz'
       }
    },

    {
       img: 'https://asset.msi.com/resize/image/global/product/product_9_20180411114234_5acd842a97197.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
       producent: 'Gigabyte',
       model: 'GeForce RTX 3060',
       Pojemność_pamięci: '12 GB GDDR6',
       Rodzaj_pamięci: 'GDDR6',
       cena: '1499 zł',
        
       szczegółowe: {
        Maksymalna_rozdzielczość: '7680x4320',
        Przepustowość_pamięci: '360 GB/s',
        taktowanie_układu: '1320 MHz',
        taktowanie_układu_Turbo: '1777 MHz'
       }
    },

    {
       img: 'https://m.media-amazon.com/images/I/613nS8MNGEL._AC_UF1000,1000_QL80_.jpg',
       producent: 'Sapphire',
       model: 'Radeon RX 6800',
       Pojemność_pamięci: '16 GB GDDR6',
       Rodzaj_pamięci: 'GDDR6',
       cena: '2199 zł',
        
       szczegółowe: {
        Maksymalna_rozdzielczość: '7680x4320',
        Przepustowość_pamięci: '512 GB/s',
        taktowanie_układu: '1700 MHz',
        taktowanie_układu_Turbo: '2105 MHz'
       }
    },

    {
       img: 'https://m.media-amazon.com/images/I/81ODMAD7VwL._AC_UF1000,1000_QL80_.jpg',
       producent: 'ZOTAC',
       model: 'GeForce GTX 1660',
       Pojemność_pamięci: '6 GB GDDR5',
       Rodzaj_pamięci: 'GDDR5',
       cena: '999 zł',
        
       szczegółowe: {
        Maksymalna_rozdzielczość: '7680x4320',
        Przepustowość_pamięci: '192 GB/s',
        taktowanie_układu: '1530 MHz',
        taktowanie_układu_Turbo: '1785 MHz'
       }
    },

    {
       img: 'https://www.mediaexpert.pl/media/cache/resolve/gallery/images/26/2637245/Karta-graficzna-PALIT-GeForce-RTX-3070-GamingPro-8GB-opakowanie.jpg',
       producent: 'Palit',
       model: 'GeForce RTX 3070',
       Pojemność_pamięci: '8 GB GDDR6',
       Rodzaj_pamięci: 'GDDR6',
       cena: '1799 zł',
        
       szczegółowe: {
        Maksymalna_rozdzielczość: '7680x4320',
        Przepustowość_pamięci: '448 GB/s',
        taktowanie_układu: '1500 MHz',
        taktowanie_układu_Turbo: '1725 MHz'
       }
    },

    {
       img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/12/pr_2019_12_12_12_36_9_687_07.jpg',
       producent: 'XFX',
       model: 'Radeon RX 5500 XT',
       Pojemność_pamięci: '8 GB GDDR6',
       Rodzaj_pamięci: 'GDDR6',
       cena: '899 zł',
    
       szczegółowe: {
        Maksymalna_rozdzielczość: '7680x4320',
        Przepustowość_pamięci: '448 GB/s',
        taktowanie_układu: '1500 MHz',
        taktowanie_układu_Turbo: '1725 MHz'
       }
    }
]



function Items() {

    return (
      <section>
        {itemy.map((ite)=>(
            <Item
                key={ite.model}
                id={ite.id}
                model={ite.model}
                amount={ite.amount}
                cena={ite.cena}
                img={ite.img}
                producent={ite.producent}
            />
        ))}
      </section>
    );
}
  
export default Items;