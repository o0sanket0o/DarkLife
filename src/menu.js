// Edit prices here (rupees). "150/280" = two columns, labelled by the section's `cols`.
// Optional third entry in an item is a description line.

export const INFO = {
  name: "Food Plaza",
  tagline: "Bathinda Road, VPO Badal",
  phone: { label: "98789-19505", tel: "+919878919505" },
  facebook: "https://www.facebook.com/DarkLifeBadal",
  credit: {
    text: "To get your website built, contact",
    linkedin: "https://www.linkedin.com/in/sanket-chugh-6a52a4216/",
    phone: { label: "+91 99157-11293", tel: "+919915711293" },
  },
  delivery: "Home delivery ₹30 per order. Free delivery on orders of ₹500.",
};

export const MENU = [
  { id: "mini", title: "Mini Meals", icon: "🍢", items: [
    ["Cheese Tikka", "230"], ["Cheese Malai Tikka", "250"], ["Cheese Finger", "180"],
    ["Cheese Chilli", "220"], ["Cheese Chilli KFC", "250"], ["Veg. Manchurian Gravy", "180"],
    ["Veg. Manchurian Dry", "180"], ["French Fries", "120"], ["Chilli Potato", "180"],
    ["Honey Chilli Potato", "200"], ["Pasta", "160"], ["Malai Pasta", "200"],
    ["Plain Peanut", "20"], ["Peanut Masala", "80"], ["Masala Papad", "60"],
    ["Peanut Masala Papad", "100"], ["Papad Dry", "20"], ["Papad Fry", "20"]] },
  { id: "veg", title: "Veg", icon: "🥘", cols: ["Half", "Full"], items: [
    ["Karhahi Paneer", "150/280"], ["Shahi Paneer", "150/250"], ["Paneer Do-Piaja", "150/250"],
    ["Matar Paneer", "120/220"], ["Paneer Bhurji", "100/180"], ["Cheese Tomato", "120/220"],
    ["Cheese Tikka Butter Masala", "160/250"], ["Matar Malai Methi", "130/220"],
    ["Mix. Veg.", "130/220"], ["Chana Masala", "100/180"], ["Dal Makhni", "100/180"],
    ["Dal Tadka", "80"], ["Veg. Garevi", "100"]] },
  { id: "soya", title: "Soya", icon: "🥦", items: [
    ["Soya Chaap", "150"], ["Soya Malai Chaap", "180"], ["Soya Chilli", "150"],
    ["Soya Crunchy", "150"], ["Soya Curry", "180"]] },
  { id: "nonveg", title: "Non Veg", icon: "🍗", nonveg: true, cols: ["Half", "Full"], items: [
    ["Home Style Chicken", "250/450"], ["Punjabi Chicken", "280/500"], ["Karhahi Chicken", "280/500"],
    ["Zeera Chicken", "280/500"], ["Lemon Chicken", "280/500"], ["Butter Chicken", "300/550"],
    ["Dahi Chicken", "280/500"], ["Chicken Malai Methi", "300/550"], ["Chicken Pakorha", "240/450"],
    ["Chicken Pakorha KFC", "280/500"], ["Chilli Chicken", "280/500"],
    ["Chilli Chicken Bone-Less", "300/550"], ["Chilli Chicken KFC", "300/550"],
    ["Chicken 65 (Dark Life Spl.)", "300/500"], ["Lollypop Chicken (6 pcs)", "150"]] },
  { id: "tandoori", title: "Non Veg Tandoori", icon: "🔥", nonveg: true, cols: ["4 pcs", "8 pcs"], items: [
    ["Chicken Roasted", "240/430"], ["Chicken Afgani", "280/500"], ["Chicken Tikka", "250/450"],
    ["Malai Chicken Tikka", "280/500"], ["Tandoori Tangdi", "240/450"]] },
  { id: "fish", title: "Fish (Basa, 250 gm)", icon: "🐟", nonveg: true, items: [
    ["Fish Pakorha", "250"], ["Fish KFC", "300"], ["Fish Chilli", "300"], ["Fish Tandoori", "250"]] },
  { id: "eggs", title: "Eggs (2 pcs)", icon: "🍳", nonveg: true, items: [
    ["Egg Bhurji", "50"], ["Egg Omelette", "50"], ["Egg Kari", "150"], ["Boiled Egg", "15"],
    ["Egg Half Fry", "30"], ["Thai Omelette", "150"], ["Bread Omelette", "80"]] },
  { id: "breads", title: "Breads", icon: "🫓", items: [
    ["Roti Simple", "10"], ["Roti Butter", "15"], ["Mix Paranta", "50"], ["Cheese Paranta", "60"],
    ["Onion Paranta", "40"], ["Aloo Paranta", "40"]] },
  { id: "rice", title: "Rice", icon: "🍚", items: [
    ["Steam Rice", "60"], ["Zeera Rice", "80"], ["Veg. Pulao", "120"], ["Veg. Fried Rice", "120"],
    ["Chicken Rice", "150"], ["Chicken Triple Rice", "180"], ["Chicken Singapuri Rice", "180"],
    ["Veg Tawa Biryani", "100"], ["Chicken Tawa Biryani", "150"]] },
  { id: "pizzas", title: "Pizzas", icon: "🍕", cols: ["Small", "Large"], items: [
    ["Onion Tomato Pizza", "80/120"], ["Tomato Pizza", "80/120"], ["Veg. Pizza", "100/150"],
    ["Veg. Corn Pizza", "120/180"], ["Veg. Mushroom Pizza", "150/200"], ["Pizza Margherita", "150/200"],
    ["Veg. Cheese Pizza", "150/200"], ["Pizza Paneer", "180/250"], ["Pizza Chicken", "200/280"]] },
  { id: "burger", title: "Burger", icon: "🍔", items: [
    ["Aloo Tikki Burger", "50"], ["Aloo Tikki Noodle Burger", "60"], ["Double Aloo Tikki Burger", "70"],
    ["Aloo Tikki Cheese Burger", "90"], ["KFC Fried Veg. Cheese Burger", "120"],
    ["Omelette Burger", "100"], ["Chicken Burger", "120"]] },
  { id: "sandwich", title: "Sandwich", icon: "🥪", items: [
    ["Veg. Sandwich", "70"], ["Veg. Sandwich Grilled", "80"], ["Cheese Grilled Sandwich", "100"],
    ["Chicken Grilled Sandwich", "120"]] },
  { id: "rolls", title: "Rolls", icon: "🌯", items: [
    ["Veg. Roll", "60"], ["Veg. Cheese Roll", "80"], ["Double Egg Roll", "80"],
    ["Double Egg Chicken Roll", "120"], ["Veg. Spring Roll", "80"], ["Veg. Cheese Spring Roll", "100"],
    ["Chicken Spring Roll", "120"]] },
  { id: "noodles", title: "Noodles", icon: "🍜", items: [
    ["Veg. Noodles", "80"], ["Cheese Noodles", "100"], ["Chicken Noodles", "120"],
    ["Singapuri Noodles", "150"]] },
  { id: "maggi", title: "Maggi", icon: "🥡", items: [
    ["Plain Maggi", "50"], ["Veg. Maggi", "60"], ["Cheese Maggi", "90"], ["Egg Maggi", "80"],
    ["Chicken Maggi", "100"]] },
  { id: "soups", title: "Soups", icon: "🍲", items: [["Chicken Soup", "80"], ["Veg. Soup", "60"]] },
  { id: "salad", title: "Salad", icon: "🥗", items: [
    ["Green Salad", "50"], ["Cream Salad", "80"], ["Tandoori Salad", "120"], ["Chicken Salad", "200"]] },
  { id: "raita", title: "Raita", icon: "🥣", items: [
    ["Boondi Raita", "60"], ["Mix Raita", "60"], ["Zira Raita", "60"], ["Plain Curd", "40"]] },
  { id: "drinks", title: "Drinks", icon: "🥤", items: [
    ["Strawberry Shake", "70"], ["Butterscotch Shake", "70"], ["Mango Shake", "80"],
    ["Cold Coffee", "60"], ["Hot Coffee", "30"], ["Tea", "20"], ["Namkeen Lassi", "40"],
    ["Sweet Lassi", "40"]] },
];
