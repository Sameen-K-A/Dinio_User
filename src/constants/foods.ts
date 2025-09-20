import type { IFood } from "@/types/general";
export type { IFood };
import { mockCategories } from "./category";

const getRandomCategory = () => {
  const randomIndex = Math.floor(Math.random() * mockCategories.length);
  return mockCategories[randomIndex];
};

const foodsList = [
  {
    foodId: "1",
    name: "Pasta Alfredo",
    amount: 11.49,
    image: "https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/fettuccine-alfredo-with-creme-fraiche.jpg",
    category: getRandomCategory(),
    description: "Creamy fettuccine pasta tossed in rich Alfredo sauce made with butter, cream, and parmesan cheese.",
    reviews: [
      { name: "Alice", rating: 5, review: "Delicious and creamy!" },
      { name: "Bob", rating: 4, review: "Perfect comfort food." },
      { name: "Charlie", rating: 4, review: "Could use more parmesan." },
    ],
  },
  {
    foodId: "2",
    name: "Margherita Pizza",
    amount: 9.99,
    image: "https://cb.scene7.com/is/image/Crate/frame-margherita-pizza-1?wid=800&qlt=70&op_sharpen=1",
    category: getRandomCategory(),
    description: "Classic Neapolitan-style pizza topped with fresh mozzarella, tomatoes, and basil.",
    reviews: [
      { name: "David", rating: 5, review: "Crispy crust!" },
      { name: "Ella", rating: 5, review: "Authentic taste." },
      { name: "Frank", rating: 4, review: "Loved the fresh basil." },
    ],
  },
  {
    foodId: "3",
    name: "Caesar Salad",
    amount: 7.5,
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg",
    category: getRandomCategory(),
    description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan cheese.",
    reviews: [
      { name: "Grace", rating: 5, review: "Fresh and crunchy!" },
      { name: "Hannah", rating: 4, review: "Dressing was perfect." },
      { name: "Ian", rating: 4, review: "Croutons could be crispier." },
    ],
  },
  {
    foodId: "4",
    name: "Garlic Bread",
    amount: 4.25,
    image: "https://i0.wp.com/thejoyfilledkitchen.com/wp-content/uploads/2022/02/DSC_0047-2.jpg?fit=4000%2C6000&ssl=1",
    category: getRandomCategory(),
    description: "Oven-baked bread brushed with garlic butter and herbs, served hot and crispy.",
    reviews: [
      { name: "Jack", rating: 5, review: "Super crispy!" },
      { name: "Karen", rating: 5, review: "Garlic flavor was amazing." },
      { name: "Leo", rating: 4, review: "Would order again." },
    ],
  },
  {
    foodId: "5",
    name: "Tiramisu",
    amount: 6.75,
    image: "https://bakewithzoha.com/wp-content/uploads/2025/06/tiramisu-featured.jpg",
    category: getRandomCategory(),
    description: "A coffee-flavored Italian dessert made of ladyfingers dipped in espresso and layered with mascarpone cream.",
    reviews: [
      { name: "Mia", rating: 5, review: "Best tiramisu I’ve had!" },
      { name: "Noah", rating: 5, review: "Not too sweet, just perfect." },
      { name: "Olivia", rating: 5, review: "Coffee flavor was strong and tasty." },
    ],
  },
  {
    foodId: "6",
    name: "Chicken Biryani",
    amount: 13.99,
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
    category: getRandomCategory(),
    description: "Fragrant basmati rice cooked with tender chicken, spices, and saffron for an authentic biryani flavor.",
    reviews: [
      { name: "Priya", rating: 5, review: "Authentic taste!" },
      { name: "Ravi", rating: 5, review: "Perfect spice balance." },
      { name: "Sneha", rating: 4, review: "Huge portion size." },
    ],
  },
  {
    foodId: "7",
    name: "Paneer Butter Masala",
    amount: 10.5,
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/paneer-butter-masala-recipe.jpg",
    category: getRandomCategory(),
    description: "Soft paneer cubes simmered in a rich, creamy tomato-based curry with butter and spices.",
    reviews: [
      { name: "Tanvi", rating: 5, review: "Paneer was soft and fresh." },
      { name: "Uday", rating: 4, review: "Creamy and flavorful." },
      { name: "Vikram", rating: 4, review: "A little too rich but tasty." },
    ],
  },
  {
    foodId: "8",
    name: "Naan",
    amount: 2.5,
    image: "https://fullofplants.com/wp-content/uploads/2023/05/Homemade-Naan-Bread-Restaurant-Style-Vegan-thumb-1.jpg",
    category: getRandomCategory(),
    description: "Traditional Indian flatbread baked in a tandoor, soft and fluffy with a slight char.",
    reviews: [
      { name: "Waseem", rating: 4, review: "Soft and fluffy." },
      { name: "Yash", rating: 5, review: "Perfect with curries." },
      { name: "Zara", rating: 4, review: "Slightly burnt edges but still tasty." },
    ],
  },
  {
    foodId: "9",
    name: "Gulab Jamun",
    amount: 3.0,
    image: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2016/10/gulab-jamun-using-mix.jpg?w=1200&ssl=1",
    category: getRandomCategory(),
    description: "Soft, spongy balls made from milk solids, fried and soaked in sugar syrup flavored with cardamom.",
    reviews: [
      { name: "Arjun", rating: 5, review: "Melt in the mouth!" },
      { name: "Bhavna", rating: 5, review: "Syrup was perfect." },
      { name: "Chirag", rating: 5, review: "Best dessert ever." },
    ],
  },
  {
    foodId: "10",
    name: "Masala Dosa",
    amount: 8.25,
    image: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg",
    category: getRandomCategory(),
    description: "Crispy rice crepe filled with spiced potato filling, served with chutney and sambar.",
    reviews: [
      { name: "Deepa", rating: 5, review: "Very crispy dosa!" },
      { name: "Eshan", rating: 4, review: "Potato filling was flavorful." },
      { name: "Farah", rating: 5, review: "Chutney was amazing." },
    ],
  },
  {
    foodId: "11",
    name: "Sushi Platter",
    amount: 18.99,
    image: "https://plazacatering.co.in/blog/wp-content/uploads/2024/07/Untitled-design-55.jpg",
    category: getRandomCategory(),
    description: "Assorted fresh sushi rolls including tuna, salmon, and vegetarian options.",
    reviews: [
      { name: "George", rating: 5, review: "Fresh and delicious!" },
      { name: "Haruto", rating: 5, review: "Loved the salmon roll." },
      { name: "Isla", rating: 4, review: "Great variety." },
    ],
  },
  {
    foodId: "12",
    name: "Ramen Bowl",
    amount: 12.5,
    image: "https://savorylotus.com/wp-content/uploads/2019/01/0e98fbde-20190120-_mg_8401-2-1.jpg",
    category: getRandomCategory(),
    description: "A hearty bowl of ramen noodles in flavorful broth topped with egg, pork, and veggies.",
    reviews: [
      { name: "Jin", rating: 5, review: "Broth was rich!" },
      { name: "Kaito", rating: 4, review: "Noodles were perfect." },
      { name: "Lina", rating: 4, review: "Egg was slightly overcooked but tasty." },
    ],
  },
  {
    foodId: "13",
    name: "Tempura",
    amount: 9.75,
    image: "https://www.kikkoman.co.uk/fileadmin/_processed_/9/b/csm_1414_Vegan_Tempura_Sushi_Mobile_Header_a763bd7b63.webp",
    category: getRandomCategory(),
    description: "Crispy battered vegetables and shrimp served with a light soy dipping sauce.",
    reviews: [
      { name: "Momo", rating: 4, review: "Crispy and light." },
      { name: "Nori", rating: 5, review: "Shrimp tempura was perfect." },
      { name: "Owen", rating: 4, review: "Could use more dipping sauce." },
    ],
  },
  {
    foodId: "14",
    name: "Mochi Ice Cream",
    amount: 5.5,
    image: "https://pickyeaterblog.com/wp-content/uploads/2023/03/mango-mochi.jpg",
    category: getRandomCategory(),
    description: "Chewy mochi filled with creamy ice cream in various flavors like mango and green tea.",
    reviews: [
      { name: "Pia", rating: 5, review: "Mango flavor was amazing." },
      { name: "Quinn", rating: 4, review: "Chewy and soft." },
      { name: "Riko", rating: 5, review: "Ice cream was creamy and fresh." },
    ],
  },
  {
    foodId: "15",
    name: "Edamame",
    amount: 4.0,
    image: "https://beinspired.au/wp-content/uploads/2022/05/Edamame-w-Furikake.jpeg",
    category: getRandomCategory(),
    description: "Steamed soybeans sprinkled with sea salt, a healthy and protein-rich appetizer.",
    reviews: [
      { name: "Satoshi", rating: 4, review: "Simple and healthy." },
      { name: "Tina", rating: 5, review: "Fresh beans." },
      { name: "Uma", rating: 4, review: "Could use more salt." },
    ],
  },
]

export const foodsByRestaurant: Record<string, IFood[]> = {
  rest_1: foodsList,
  rest_2: foodsList,
  rest_3: foodsList,
};