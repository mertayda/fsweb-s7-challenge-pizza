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
import Pepperoni from "../../../Assets/mile2-aseets/images/Pepperoni.jpg"
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
    img: Pepperoni,
    category: "Pizza",
    description: "A classic pizza topped with pepperoni and melted mozzarella cheese."
  },
  {
    id: 2,
    title: "Veggie Ramen",
    price: 10.99,
    img: VeggieRamen,
    category: "Ramen",
    description: "A bowl of ramen filled with fresh vegetables and a savory broth."
  },
  {
    id: 3,
    title: "Cheesy French Fries",
    price: 5.99,
    img: CheesyFrenchFries,
    category: "French Fries",
    description: "Crispy French fries topped with melted cheddar cheese and served with a side of ranch dressing."
  },
  {
    id: 4,
    title: "Chicken Tenders",
    price: 7.99,
    img: ChickenTenders,
    category: "Fast Food",
    description: "Crispy chicken strips served with a side of your choice of sauce."
  },
  {
    id: 5,
    title: "Bacon Cheeseburger",
    price: 11.99,
    img: BaconCheeseburger,
    category: "Burger",
    description: "A juicy burger topped with crispy bacon, melted cheddar cheese, lettuce, tomato, and onion."
  },
  {
    id: 6,
    title: "Margherita Pizza",
    price: 11.99,
    img: MargheritaPizza,
    category: "Pizza",
    description: "A classic pizza topped with fresh mozzarella, tomato, and basil."
  },
  {
    id: 7,
    title: "Spicy Miso Ramen",
    price: 11.99,
    img: SpicyMisoRamen,
    category: "Ramen",
    description: "A spicy and savory ramen filled with fresh vegetables and a rich miso broth."
  },
  {
    id: 8,
    title: "Garlic Parmesan Fries",
    price: 5.99,
    img: GarlicPermesanFries,
    category: "French Fries",
    description: "Crispy French fries tossed in garlic butter and topped with grated Parmesan cheese."
  },
  {
    id: 9,
    title: "Fish and Chips",
    price: 10.99,
    img: FishandChips,
    category: "Fast Food",
    description: "Crispy beer-battered fish served with a side of crispy French fries and tartar sauce."
  },
  {
    id: 10,
    title: "Veggie Burger",
    price: 10.99,
    img: VeggieBurger,
    category: "Burger",
    description: "A flavorful veggie burger topped with lettuce, tomato, onion, and your choice of sauce."
  },
  {
    id: 11,
    title: "BBQ Chicken Pizza",
    price: 13.99,
    img: BBQChickenPizza,
    category: "Pizza",
    description: "A pizza topped with BBQ sauce, grilled chicken, red onion, and cilantro."
  },
  {
    id: 12,
    title: "Tonkotsu Ramen",
    price: 12.99,
    img: TonkotsuRamen,
    category: "Ramen",
    description: "A rich and creamy ramen filled with tender pork, boiled egg, and green onion."
  },
  {
    id: 13,
    title: "Chili Cheese Fries",
    price: 6.99,
    img: ChiliCheeseFries,
    category: "French Fries",
    description: "Crispy French fries topped with a rich chili and melted cheddar cheese."
  },
  {
    id: 14,
    title: "Grilled Chicken Salad",
    price: 9.99,
    img: GrilledChickenSalad,
    category: "Fast Food",
    description: "A fresh salad topped with grilled chicken, mixed greens, tomato, cucumber, and your choice of dressing."
  },
  {
    id: 15,
    title: "Mushroom Swiss Burger",
    price: 12.99,
    img: MushroomSwissBurger,
    category: "Burger",
    description: "A juicy burger topped with sautéed mushrooms, melted Swiss cheese, lettuce, tomato, and onion."
  },
  {
    id: 16,
    title: "Hawaiian Pizza",
    price: 12.99,
    img: HawainPizza,
    category: "Pizza",
   description: "A pizza topped with ham, pineapple, and melted mozzarella cheese."
  },
  {
    id: 17,
    title: "Shio Ramen",
    price: 11.99,
    img: ShioRamen,
    category: "Ramen",
    description: "A light and flavorful ramen filled with fresh vegetables and a clear broth."
  },
  {
    id: 18,
    title: "Loaded Nachos",
    price: 7.99,
    img: LoadedNachos,
    category: "French Fries",
    description: "Crispy tortilla chips topped with melted cheese, spicy ground beef, pico de gallo, sour cream, and jalapeño."
  },
  {
    id: 19,
    title: "Shrimp Tacos",
    price: 11.99,
    img: ShrimpTacos,
    category: "Fast Food",
    description: "Grilled shrimp served in a warm tortilla with fresh cabbage, pico de gallo, and a spicy lime crema."
  },
  {
    id: 20,
    title: "Coca-Cola",
    price: 1.99,
    img: CocoCola,
    category: "Soft Drinks",
    description: "A classic carbonated beverage with a refreshing taste."
  },
  {
    id: 21,
    title: "Sprite",
    price: 1.99,
    img: Sprite,
    category: "Soft Drinks",
    description: "A crisp and refreshing lemon-lime flavored carbonated beverage."
  }
];

export default products;
