import BaconCheeseburger from "../../../Assets/mile2-aseets/images/BaconCheeseburger.jpg"
import BBQChickenPizza from "../../../Assets/mile2-aseets/images/BBQ-Chicken-Pizza.jpg"
import CheesyFrenchFries from "../../../Assets/mile2-aseets/images/Cheesy-French-Fries.jpg"
import ChickenTenders from "../../../Assets/mile2-aseets/images/ChickenTenders.jpg"
import ChiliCheeseFries from "../../../Assets/mile2-aseets/images/ChiliCheeseFries.jpg"
import CocoCola from "../../../Assets/mile2-aseets/images/Coca-Cola.jpg"
import FishandChips from "../../../Assets/mile2-aseets/images/FishandChips.jpg"
import GarlicPermesanFries from "../../../Assets/mile2-aseets/images/Garlic-Parmesan-Fries.jpg"
import GrilledChickenSalad from "../../../Assets/mile2-aseets/images/GrilledChickenSalad.jpg"
import HawainPizza from "../../../Assets/mile2-aseets/images/HawaianPizza.jpg"
import LoadedNachos from "../../../Assets/mile2-aseets/images/LoadedNachos.jpg"
import MargheritaPizza from "../../../Assets/mile2-aseets/images/MargheritaPizza.jpg"
import MushroomSwissBurger from "../../../Assets/mile2-aseets/images/MushroomSwissBurger.jpg"
import Pepperoni from "../../../Assets/mile2-aseets/images/pepperoni.jpg"
import ShioRamen from "../../../Assets/mile2-aseets/images/ShioRamen.jpg"
import  SpicyMisoRamen from "../../../Assets/mile2-aseets/images/SpicyMisoRamen.jpg"
import TonkotsuRamen from "../../../Assets/mile2-aseets/images/Tonkotsu-Ramen.jpg"
import VeggieBurger from "../../../Assets/mile2-aseets/images/Veggie-Burger.jpg"
import VeggieRamen from "../../../Assets/mile2-aseets/images/VeggieRamen.jpg"
import ShrimpTacos from "../../../Assets/mile2-aseets/images/ShrimpTacos.jpg"
import Sprite from "../../../Assets/mile2-aseets/images/Sprite.jpg"

 const products = [
  {
    id: 1,
    title: "Pepperoni Pizza",
    price: 12.99,
    img: "../../../Assets/mile2-aseets/images/pepperoni.jpg",
    category: "Pizza",
    description: "Sade bir pepperoni ile kaplanmış klasik pizza ve erimiş mozarella peyniri."
  },
  {
    id: 2,
    title: "Veggie Ramen",
    price: 10.99,
    img: VeggieRamen,
    category: "Ramen",
    description: "Taze sebzeler ve lezzetli bir et suyu ile dolu bir ramen kasesi."
  },
  {
    id: 3,
    title: "Cheesy French Fries",
    price: 5.99,
    img: CheesyFrenchFries,
    category: "French Fries",
    description: "Eriyen cheddar peyniri ile kaplı çıtır patates kızartmaları, yanına ranch sos ile servis edilir."
  },
  {
    id: 4,
    title: "Chicken Tenders",
    price: 7.99,
    img: ChickenTenders,
    category: "Fast Food",
    description: "Ayrı sos seçeneği ile servis edilen çıtır tavuk şeritleri."
  },
  {
    id: 5,
    title: "Bacon Cheeseburger",
    price: 11.99,
    img: BaconCheeseburger,
    category: "Burger",
    description: "Kıtır bacon, erimiş cheddar peyniri, marul, domates ve soğan ile kaplanmış sulu hamburger."
  },
  {
    id: 6,
    title: "Margherita Pizza",
    price: 11.99,
    img: MargheritaPizza,
    category: "Pizza",
    description: "Taze mozzarella, domates ve fesleğen ile kaplanmış basit ama lezzetli pizza."
  },
  {
    id: 7,
    title: "Spicy Miso Ramen",
    price: 11.99,
    img: SpicyMisoRamen,
    category: "Ramen",
    description: "Zengin miso suyu, taze sebzeler ve bir miktar baharat içeren baharatlı bir ramen."
  },
  {
    id: 8,
    title: "Garlic Parmesan Fries",
    price: 5.99,
    img: GarlicPermesanFries,
    category: "French Fries",
    description: "Sarımsak yağına bulanmış çıtır patates kızartmaları ve rendelenmiş Parmesan peyniri ile üstü kaplanmıştır."
  },
  {
    id: 9,
    title: "Fish and Chips",
    price: 10.99,
    img: FishandChips,
    category: "Fast Food",
    description: "Yanında çıtır patates kızartması ve tartar sosu ile servis edilen çıtır bira kaplamalı balık."
  },
  {
    id: 10,
    title: "Veggie Burger",
    price: 10.99,
    img: VeggieBurger,
    category: "Burger",
    description: "Marul, domates, soğan ve sos seçeneği ile kaplanmış lezzetli sebze köftesi."
  },
  {
    id: 11,
    title: "BBQ Chicken Pizza",
    price: 13.99,
    img: BBQChickenPizza,
    category: "Pizza",
    description: "BBQ sosu, ızgara tavuk, kırmızı soğan ve kişniş ile kaplanmış lezzetli pizza."
  },
  {
    id: 12,
    title: "Tonkotsu Ramen",
    price: 12.99,
    img: TonkotsuRamen,
    category: "Ramen",
    description: "Yumuşak haşlanmış yumurta, tender domuz pastırması ve yeşil soğan ile birlikte zengin ve kremsi domuz kemiği suyu ramen."
  },
  {
    id: 13,
    title: "Chili Cheese Fries",
    price: 6.99,
    img: ChiliCheeseFries,
    category: "French Fries",
    description: "Tadıyla zengin chili ile kaplanmış çıtır patates kızartmaları ve eritilmiş cheddar peyniri ile hazırlanmıştır."
  },
  {
    id: 14,
    title: "Grilled Chicken Salad",
    price: 9.99,
    img: GrilledChickenSalad,
    category: "Fast Food",
    description: "Izgara tavuk, karışık yeşillikler, domates, salatalık ve seçtiğiniz sos ile taze ve sağlıklı bir salata."
  },
  {
    id: 15,
    title: "Mushroom Swiss Burger",
    price: 12.99,
    img: MushroomSwissBurger,
    category: "Burger",
    description: "Sauté edilmiş mantar, erimiş İsviçre peyniri, marul, domates ve soğan ile kaplanmış sulu hamburger."
  },
  {
    id: 16,
    title: "Hawaiian Pizza",
    price: 12.99,
    img: HawainPizza,
    category: "Pizza",
    description: "Biftek, ananas ve erimiş mozarella peyniri ile kaplanmış tatlı ve tuzlu pizza."
  },
  {
    id: 17,
    title: "Shio Ramen",
    price: 11.99,
    img: ShioRamen,
    category: "Ramen",
    description: "Açık tuzlu et suyu, taze sebzeler ve tender tavuk ile hazırlanan hafif ve lezzetli ramen."
  },
  {
    id: 18,
    title: "Loaded Nachos",
    price: 7.99,
    img: LoadedNachos,
    category: "French Fries",
    description: "Eritilmiş peynir, baharatlı kıyma, pico de gallo, ekşi krema ve jalapeño ile kaplanmış çıtır tortilla cipsleri."
  },
  {
    id: 19,
    title: "Shrimp Tacos",
    price: 11.99,
    img: ShrimpTacos,
    category: "Fast Food",
    description: "Taze lahana, pico de gallo ve baharatlı limon kreması ile sıcak tortillalarda servis edilen ızgara karides."
  },
  {
    id: 20,
    title: "Coca-Cola",
    price: 1.99,
    img: CocoCola,
    category: "Soft Drinks",
    description: "Serinletici bir tada sahip klasik karbonatlı içecek."
  },
  {
    id: 21,
    title: "Sprite",
    price: 1.99,
    img: Sprite,
    category: "Soft Drinks",
    description: "Kıtır ve ferahlatıcı bir limon-lime tatlı karbonatlı içecek."
  }
];


export default products;