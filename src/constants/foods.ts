import type { IFood } from "@/types/general";
export type { IFood };
import { mockCategories } from "./category";

const getRandomCategory = () => {
  const randomIndex = Math.floor(Math.random() * mockCategories.length);
  return mockCategories[randomIndex];
};

export const foodsByRestaurant: Record<string, IFood[]> = {
  rest_1: [
    {
      foodId: "1",
      name: "Pasta Alfredo",
      amount: 11.49,
      image: "https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/fettuccine-alfredo-with-creme-fraiche.jpg",
      category: getRandomCategory(),
      description: "Creamy fettuccine pasta tossed in rich Alfredo sauce made with butter, cream, and parmesan cheese.",
    },
    {
      foodId: "2",
      name: "Margherita Pizza",
      amount: 9.99,
      image: "https://cb.scene7.com/is/image/Crate/frame-margherita-pizza-1?wid=800&qlt=70&op_sharpen=1",
      category: getRandomCategory(),
      description: "Classic Neapolitan-style pizza topped with fresh mozzarella, tomatoes, and basil.",
    },
    {
      foodId: "3",
      name: "Caesar Salad",
      amount: 7.5,
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg",
      category: getRandomCategory(),
      description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan cheese.",
    },
    {
      foodId: "4",
      name: "Garlic Bread",
      amount: 4.25,
      image: "https://i0.wp.com/thejoyfilledkitchen.com/wp-content/uploads/2022/02/DSC_0047-2.jpg?fit=4000%2C6000&ssl=1",
      category: getRandomCategory(),
      description: "Oven-baked bread brushed with garlic butter and herbs, served hot and crispy.",
    },
    {
      foodId: "5",
      name: "Tiramisu",
      amount: 6.75,
      image: "https://bakewithzoha.com/wp-content/uploads/2025/06/tiramisu-featured.jpg",
      category: getRandomCategory(),
      description: "A coffee-flavored Italian dessert made of ladyfingers dipped in espresso and layered with mascarpone cream.",
    },
  ],
  rest_2: [
    {
      foodId: "1",
      name: "Chicken Biryani",
      amount: 13.99,
      image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
      category: getRandomCategory(),
      description: "Fragrant basmati rice cooked with tender chicken, spices, and saffron for an authentic biryani flavor.",
    },
    {
      foodId: "2",
      name: "Paneer Butter Masala",
      amount: 10.5,
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/paneer-butter-masala-recipe.jpg",
      category: getRandomCategory(),
      description: "Soft paneer cubes simmered in a rich, creamy tomato-based curry with butter and spices.",
    },
    {
      foodId: "3",
      name: "Naan",
      amount: 2.5,
      image: "https://fullofplants.com/wp-content/uploads/2023/05/Homemade-Naan-Bread-Restaurant-Style-Vegan-thumb-1.jpg",
      category: getRandomCategory(),
      description: "Traditional Indian flatbread baked in a tandoor, soft and fluffy with a slight char.",
    },
    {
      foodId: "4",
      name: "Gulab Jamun",
      amount: 3.0,
      image: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2016/10/gulab-jamun-using-mix.jpg?w=1200&ssl=1",
      category: getRandomCategory(),
      description: "Soft, spongy balls made from milk solids, fried and soaked in sugar syrup flavored with cardamom.",
    },
    {
      foodId: "5",
      name: "Masala Dosa",
      amount: 8.25,
      image: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg",
      category: getRandomCategory(),
      description: "Crispy rice crepe filled with spiced potato filling, served with chutney and sambar.",
    },
  ],
  rest_3: [
    {
      foodId: "1",
      name: "Sushi Platter",
      amount: 18.99,
      image: "https://plazacatering.co.in/blog/wp-content/uploads/2024/07/Untitled-design-55.jpg",
      category: getRandomCategory(),
      description: "Assorted fresh sushi rolls including tuna, salmon, and vegetarian options.",
    },
    {
      foodId: "2",
      name: "Ramen Bowl",
      amount: 12.5,
      image: "https://savorylotus.com/wp-content/uploads/2019/01/0e98fbde-20190120-_mg_8401-2-1.jpg",
      category: getRandomCategory(),
      description: "A hearty bowl of ramen noodles in flavorful broth topped with egg, pork, and veggies.",
    },
    {
      foodId: "3",
      name: "Tempura",
      amount: 9.75,
      image: "https://www.kikkoman.co.uk/fileadmin/_processed_/9/b/csm_1414_Vegan_Tempura_Sushi_Mobile_Header_a763bd7b63.webp",
      category: getRandomCategory(),
      description: "Crispy battered vegetables and shrimp served with a light soy dipping sauce.",
    },
    {
      foodId: "4",
      name: "Mochi Ice Cream",
      amount: 5.5,
      image: "https://pickyeaterblog.com/wp-content/uploads/2023/03/mango-mochi.jpg",
      category: getRandomCategory(),
      description: "Chewy mochi filled with creamy ice cream in various flavors like mango and green tea.",
    },
    {
      foodId: "5",
      name: "Edamame",
      amount: 4.0,
      image: "https://beinspired.au/wp-content/uploads/2022/05/Edamame-w-Furikake.jpeg",
      category: getRandomCategory(),
      description: "Steamed soybeans sprinkled with sea salt, a healthy and protein-rich appetizer.",
    },
  ],
};