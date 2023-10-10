import { faMemory, faMicrochip, faHardDrive, faTachographDigital, faChalkboard} from '@fortawesome/free-solid-svg-icons'

const NavItems = [
    {
      name: "Kart graficzne",
      img: faTachographDigital,
      options: ["AMD Radeon", "NVIDIA GeForce"]
    },
    {
      name: "Procesory",
      img: faMicrochip,
      options: [
        "Socket AM1 / FM1 / FM2",
        "Socket 1151",
        "Socket AM4",
        "Socket 2066",
        "Socket 1200",
        "Socket 1700",
        "Socket AM5",
      ]
    },
    {
      name: "Pamięci RAM",
      img: faMemory,
      options: ["DDR 3", "DDR 4", "DDR 5"]
    },
    {
      name: "Płyty główne",
      img: faChalkboard,
      options: [
        "Socket AM3 / AM3+",
        "Socket AM4",
        "Socket AM5",
        "Socket LGA1151",
        "Socket LGA2066",
        "Socket LGA1200",
        "Socket LGA1700",
        "Socket TR4"
      ]
    },
    {
      name: "Dyski Twarde",
      img: faHardDrive,
      options: [
        "SSD PCI-Express",
        "SSD SATA",
        "2,5 cala SATA",
        "3,5 cala SATA",
        "Zewnętrzne USB i WiFi",
        "Obudowy i adaptery",
        "Akcesoria",
        "Kieszenie"
      ]
    }
  ];
  export default NavItems;