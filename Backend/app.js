const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 900 },
  { id: 2, name: "Smartphone", category: "Electronics", price: 700 },
  { id: 3, name: "Tablet", category: "Electronics", price: 300 },
  { id: 4, name: "Smartwatch", category: "Electronics", price: 250 },
  { id: 5, name: "Headphones", category: "Electronics", price: 120 },
  { id: 6, name: "Sofa", category: "Furniture", price: 1500 },
  { id: 7, name: "Dining Table", category: "Furniture", price: 850 },
  { id: 8, name: "Chair", category: "Furniture", price: 100 },
  { id: 9, name: "Bed", category: "Furniture", price: 2000 },
  { id: 10, name: "Bookshelf", category: "Furniture", price: 300 },
  { id: 11, name: "T-Shirt", category: "Clothing", price: 25 },
  { id: 12, name: "Jeans", category: "Clothing", price: 50 },
  { id: 13, name: "Jacket", category: "Clothing", price: 120 },
  { id: 14, name: "Sneakers", category: "Clothing", price: 80 },
  { id: 15, name: "Cap", category: "Clothing", price: 20 },
  { id: 16, name: "Novel", category: "Books", price: 15 },
  { id: 17, name: "Science Book", category: "Books", price: 50 },
  { id: 18, name: "History Book", category: "Books", price: 40 },
  { id: 19, name: "Cookbook", category: "Books", price: 35 },
  { id: 20, name: "Comics", category: "Books", price: 25 },
];

const http = require("http");

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plane" });

  const subItems = [
    "electronics",
    "furniture",
    "clothing",
    "books",
    "expensive",
  ];

  if (req.method == "GET" && req.url == "/") {
    res.end(JSON.stringify(items));
    return;
  }

  if (req.method == "GET" && req.url == "/items/expensive") {
    const filter = items.filter((item) => item.price >= 500);
    res.end(JSON.stringify(filter));
    return;
  }

  for (let i of subItems) {
    if (req.method == "GET" && req.url == `/items/${i}`) {
      const filter = items.filter(
        (item) => item.category.toLowerCase() == i.toLowerCase()
      );

      res.end(JSON.stringify(filter));
    }
  }
});

httpServer.listen(5678, () => {
  console.log("Server is running on 5678 port ");
});
