export const categories = [
  {
    name: 'Pizzas',
  },
  {
    name: 'Breakfast',
  },
  {
    name: 'Appetizers',
  },
  {
    name: 'Cocktails',
  },
  {
    name: 'Beverages',
  },
];

export const _ingredients = [
  {
    name: 'Cheese-stuffed crust',
    price: 179,
    imageUrl: '/assets/images/ingredients/Cheese-stuffed crust.png',
  },
  {
    name: 'Creamy mozzarella',
    price: 79,
    imageUrl: '/assets/images/ingredients/Creamy mozzarella.png',
  },
  {
    name: 'Cheddar and Parmesan cheeses',
    price: 79,
    imageUrl: '/assets/images/ingredients/Cheddar and Parmesan cheese.png',
  },
  {
    name: 'Spicy jalapeño pepper',
    price: 59,
    imageUrl: '/assets/images/ingredients/Spicy jalapeño pepper.png',
  },
  {
    name: 'Tender chicken',
    price: 79,
    imageUrl: '/assets/images/ingredients/Tender chicken.png',
  },
  {
    name: 'Mushrooms',
    price: 59,
    imageUrl: '/assets/images/ingredients/Mushrooms.png',
  },
  {
    name: 'Ham',
    price: 79,
    imageUrl: '/assets/images/ingredients/Ham.png',
  },
  {
    name: 'Spicy pepperoni',
    price: 79,
    imageUrl: '/assets/images/ingredients/Spicy pepperoni.png',
  },
  {
    name: 'Spicy chorizo',
    price: 79,
    imageUrl: '/assets/images/ingredients/Spicy chorizo.png',
  },
  {
    name: 'Pickled cucumbers',
    price: 59,
    imageUrl: '/assets/images/ingredients/Pickled cucumbers.png',
  },
  {
    name: 'Fresh tomatoes',
    price: 59,
    imageUrl: '/assets/images/ingredients/Fresh tomatoes.png',
  },
  {
    name: 'Red onion',
    price: 59,
    imageUrl: '/assets/images/ingredients/Red onion.png',
  },
  {
    name: 'Juicy pineapples',
    price: 59,
    imageUrl: '/assets/images/ingredients/Juicy pineapples.png',
  },
  {
    name: 'Italian herbs',
    price: 39,
    imageUrl: '/assets/images/ingredients/Italian herbs.png',
  },
  {
    name: 'Sweet pepper',
    price: 59,
    imageUrl: '/assets/images/ingredients/Sweet pepper.png',
  },
  {
    name: 'Feta cubes',
    price: 79,
    imageUrl: '/assets/images/ingredients/Feta cubes.png',
  },
  {
    name: 'Meatballs',
    price: 79,
    imageUrl: '/assets/images/ingredients/Meatballs.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Pepperoni Omelette',
    imageUrl: '/assets/images/products/PepperoniOmelette.jpg',
    categoryId: 2,
  },
  {
    name: 'Coffee Latte',
    imageUrl: '/assets/images/products/CoffeeLatte.png',
    categoryId: 2,
  },
  {
    name: 'Danwich with Ham and Cheese',
    imageUrl: '/assets/images/products/Danwich.png',
    categoryId: 3,
  },
  {
    name: 'Baked Potatoes with Sauce 🌱',
    imageUrl: '/assets/images/products/BakedPotatoes.png',
    categoryId: 3,
  },
  {
    name: 'Dodster',
    imageUrl: '/assets/images/products/Dodster.png',
    categoryId: 3,
  },
  {
    name: 'Spicy Dodster 🌶️🌶️',
    imageUrl: '/assets/images/products/SpicyDodster.png',
    categoryId: 3,
  },
  {
    name: 'Banana Milkshake',
    imageUrl: '/assets/images/products/BananaMilkshake.png',
    categoryId: 4,
  },
  {
    name: 'Caramel Apple Milkshake',
    imageUrl: '/assets/images/products/CaramelAppleMilkshake.png',
    categoryId: 4,
  },
  {
    name: 'Oreo Cookie Milkshake',
    imageUrl: '/assets/images/products/OreoCookieMilkshake.png',
    categoryId: 4,
  },
  {
    name: 'Classic Milkshake',
    imageUrl: '/assets/images/products/ClassicMilkshake.png',
    categoryId: 4,
  },
  {
    name: 'Caramel Cappuccino Coffee',
    imageUrl: '/assets/images/products/CaramelCappuccinoCoffee.png',
    categoryId: 5,
  },
  {
    name: 'Coconut Latte Coffee',
    imageUrl: '/assets/images/products/CoconutLatteCoffee.png',
    categoryId: 5,
  },
  {
    name: 'Americano Coffee',
    imageUrl: '/assets/images/products/AmericanoCoffee.png',
    categoryId: 5,
  },
  {
    name: 'Coffee Latte',
    imageUrl: '/assets/images/products/CoffeeLatte.png',
    categoryId: 5,
  },
];


