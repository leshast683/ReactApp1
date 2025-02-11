
import './App.css';
import MenuApp from './components/MenuApp';

const menuData = [
  {
    menuName: "Dinner",
    menuItems: [
      {
        itemId: 1,
        itemPrice: "16",
        itemName: "Grilled Salmon",
        itemDescription: "Fresh Atlantic salmon served with roasted vegetables and lemon butter sauce."
      },
      {
        itemId: 2,
        itemPrice: "22",
        itemName: "Ribeye Steak",
        itemDescription: "12oz premium cut ribeye steak grilled to perfection with garlic mashed potatoes."
      },
      {
        itemId: 3,
        itemPrice: "18",
        itemName: "Shrimp Scampi",
        itemDescription: "Jumbo shrimp sautéed in white wine garlic sauce over linguine pasta."
      }
    ]
  },
  {
    menuName: "Dessert",
    menuItems: [
      {
        itemId: 45,
        itemPrice: "9",
        itemName: "New York Cheesecake",
        itemDescription: "Classic creamy cheesecake with graham cracker crust and berry compote."
      },
      {
        itemId: 47,
        itemPrice: "8",
        itemName: "Apple Pie",
        itemDescription: "Homemade apple pie with vanilla ice cream and caramel drizzle."
      },
      {
        itemId: 49,
        itemPrice: "7",
        itemName: "Crème Brûlée",
        itemDescription: "Rich vanilla custard topped with caramelized sugar."
      },
      {
        itemId: 50,
        itemPrice: "8",
        itemName: "Chocolate Mousse",
        itemDescription: "Dark chocolate mousse topped with whipped cream and chocolate shavings."
      }
    ]
  }
];

export default function App() {
  return (
    <div className="App">
      <MenuApp data={menuData} />
    </div>
  );
}
