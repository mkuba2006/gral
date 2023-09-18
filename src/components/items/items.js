import Item from "./item";
import "./item.css";
const itemy = [
    {
       img: 'https://bizserver.eu/5956-thickbox_default/palit-karta-graficzna-geforce-rtx-3080-gamingpro-10gb-gddr6x-320bit-hdmi3dp.jpg',
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
       img: 'https://static.gigabyte.com/StaticFile/Image/Global/0a0848c3f652206dc7f2c5c30c6cdf51/Product/28078/Png',
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
       img: 'https://hanzo.com.pl/userdata/public/gfx/68874/Karta-graficzna-Asus-ROG-Strix-GeForce-RTX-3090-White-OC-Edition-24GB-GDDR6X.jpg',
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
       img: 'https://www.pcbuildersclub.com/wp-content/uploads/2019/02/Gigabyte-GeForce-GTX-1660-Ti-Mini-ITX-OC-1.png',
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
       img: 'https://media.cdn.videotesty.pl/media/products/gigabyte-geforce-gtx-1050-ti-windforce-4gb-gddr5-128-bit-3xhdmi-dvi-d-dp-box-gv-n105twf2oc-4gd/7000225f48dc11b9910b9e4daf415460.png',
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
       img: 'https://itreseller.com.pl/wp-content/uploads/2020/11/RX-6800-PULSE-1024x1013.png',
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
       img: 'https://www.zotac.com/download/files/page/Choose_VGA/vga_zotacgaming_1660_super.png',
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
       img: 'https://image.ceneostatic.pl/data/article_picture/d9/66/2557-074d-4502-8947-0fe007ca1bff_large.png',
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
       img: 'https://asset.msi.com/resize/image/global/product/product_6_20191129112250_5de08f0a68258.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
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
      <ul>
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
      </ul>
    );
}
  
export default Items;