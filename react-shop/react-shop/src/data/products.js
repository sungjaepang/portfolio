// import basicTshirt from "../assets/p1.jpg"
// import denimjacket from "../assets/p2.jpg"
// import sneakers from "../assets/p3.jpg"
import iphoneBlue from "../assets/iphone-blue.jpg"
import iphoneGold from "../assets/iphone-gold.jpg"
import iphoneSilver from "../assets/iphone-silver.jpg"

const products = [
  {
    id: 1,
    // name: "Basic T-Shirt",
    name: "iPhone Blue",
    price: 1290000,
    // category: "top",
    // image: basicTshirt,
    image: iphoneBlue,
    description: "선명한 컬러와 미니멀한 디자인의 프리미엄 스마트폰",
    // image: "/images/p1.jpg"
  },
  {
    id: 2,
    // name: "Denim Jacket",
    name: "iPhone Gold",
    price: 1390000,
    // category: "outer",
    // image: denimjacket,
    image: iphoneGold,
    description: "세련된 골드 톤과 강력한 성능을 갖춘 모델",
    // image: "/images/p2.jpg"
  },
  {
    id: 3,
    // name: "Sneakers",
    name: "iPhone Silver",
    price: 1490000,
    // category: "shoes",
    // image: sneakers,
    image: iphoneSilver,
    description: "깔끔한 실버 컬러와 고급스러운 마감이 돋보이는 모델",
    // image: "/images/p3.jpg"
  }
];

export default products;