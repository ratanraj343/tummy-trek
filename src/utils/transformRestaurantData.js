const randomNames = [
  "Spice Hub",
  "Urban Tadka Biryani",
  "Royal Biryani",
  "Food Junction",
  "Masala Magic Biryani",
  "The Curry House",
  "Taste of India",
  "Flavour Town cafe",
  "Grill Nation",
  "Desi Delights cafe",
];

const getRandomPrice = () =>
  `₹${Math.floor(Math.random() * (1500 - 400 + 1) + 400)} for two`;

const getRandomRating = () =>
  Number((Math.random() * 4 + 1).toFixed(1)); // 1.0 - 5.0

export const transformRestaurantData = (data) => {
  return data.map((item, index) => ({
    ...item,
    id: `res_${index + 1}`,
    name: randomNames[index % randomNames.length],
    costForTwo: getRandomPrice(),
    rating: getRandomRating(),
    image: `https://loremflickr.com/320/240/food?lock=${index + 1}`,
  }));
};
