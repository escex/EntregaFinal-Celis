const productos = [
    // Bits de perforación
    { id: "1", name: "Bit 36mm, 7 botones", category: "bits", material: "35CrNiMoV", price: 9600, image: "/images/img30bits.jpg" },
    { id: "2", name: "Bit 36mm, 7 botones", category: "bits", material: "45CrNiMoV", price: 13400, image: "/images/img30bits.jpg" },
    { id: "3", name: "Bit 38mm, 7 botones", category: "bits", material: "35CrNiMoV", price: 9900, image: "/images/img30bits.jpg" },
    { id: "4", name: "Bit 38mm, 7 botones", category: "bits", material: "45CrNiMoV", price: 13700, image: "/images/img30bits.jpg" },
    { id: "5", name: "Bit 40mm, 7 botones", category: "bits", material: "35CrNiMoV", price: 10300, image: "/images/img30bits.jpg" },
    { id: "6", name: "Bit R32, 45mm, 9 botones", category: "bits", material: "45CrNiMoV", price: 38700, image: "/images/img30bits.jpg" },
    { id: "7", name: "Bit R32, 45mm, 7 botones", category: "bits", material: "45CrNiMoV", price: 37900, image: "/images/img30bits.jpg" },
  
    // Barras Integrales
    { id: "8", name: "Barra Integral 80cm", category: "barras-integrales", material: "55SiMnMo", price: 28700, image: "/images/img33bIntegrales.jpg" },
    { id: "9", name: "Barra Integral 80cm", category: "barras-integrales", material: "23CrNi3Mo", price: 49500, image: "/images/img33bIntegrales.jpg" },
    { id: "10", name: "Barra Integral 120cm", category: "barras-integrales", material: "55SiMnMo", price: 34200, image: "/images/img33bIntegrales.jpg" },
    { id: "11", name: "Barra Integral 120cm", category: "barras-integrales", material: "23CrNi3Mo", price: 65200, image: "/images/img33bIntegrales.jpg" },
  
    // Barras Cónicas
    { id: "12", name: "Barra Cónica 160cm", category: "barras-conicas", material: "55SiMnMo", price: 24600, image: "/images/img36bConicas.jpg" },
    { id: "13", name: "Barra Cónica 180cm", category: "barras-conicas", material: "55SiMnMo", price: 27400, image: "/images/img36bConicas.jpg" },
    { id: "14", name: "Barra Cónica 240cm", category: "barras-conicas", material: "55SiMnMo", price: 35900, image: "/images/img36bConicas.jpg" },
  
    // Aceites Lubricantes
    { id: "15", name: "Aceite hidráulico Crescent", category: "aceites", specification: "Premium F-AW 68", price: 50900, image: "/images/img39aceites.jpg" },
    { id: "16", name: "Aceite motor Crescent", category: "aceites", specification: "15W40", price: 62900, image: "/images/img39aceites.jpg" },
    { id: "17", name: "Aceite perforación Crescent", category: "aceites", specification: "Perforock 320", price: 73900, image: "/images/img39aceites.jpg" },
  
    // Neumáticos Minicargador
    { id: "18", name: "Neumático 10-16.5 L4A Heavy Duty", category: "neumaticos", specification: "12PR", price: 159000, image: "/images/img42neumaticos.jpg" },
  
    // Acoples Chicago
    { id: "19", name: "Abrazadera 1'", category: "acoples", price: 2700, image: "/images/img45acoples.jpg" },
    { id: "20", name: "Abrazadera 3/4'", category: "acoples", price: 2600, image: "/images/img45acoples.jpg" },
    { id: "21", name: "Abrazadera 1/2'", category: "acoples", price: 2500, image: "/images/img45acoples.jpg" },
    { id: "22", name: "Chicago HE 1'", category: "acoples", price: 3200, image: "/images/img45acoples.jpg" },
  
    // Repuestos Perforadora
    { id: "23", name: "Pistón YT27", category: "repuestos", price: 27800, image: "/images/img48repuestosPerforadora.jpg" },
    { id: "24", name: "Kit goma émbolo", category: "repuestos", compatibility: "YT27, YT29", price: 11000, image: "/images/img48repuestosPerforadora.jpg" },
    { id: "25", name: "Bombilla agua YT27", category: "repuestos", price: 2100, image: "/images/img48repuestosPerforadora.jpg" },
    { id: "26", name: "Tuerca chuck YT 27", category: "repuestos", price: 29500, image: "/images/img48repuestosPerforadora.jpg" },
  ];
  
  export function fetchProductos(category) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(category ? productos.filter((p) => p.category === category) : productos);
      }, 1000);
    });
  }
  
  export function fetchProductById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((p) => p.id === id));
      }, 1000);
    });
  }
  
  export default productos;
  