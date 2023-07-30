const express = require("express");
const app = express();
const ProductManager = require("./ProductManager");

const PORT = 3000;

const productManager = new ProductManager();

app.get("/products", async (req, res) => {
  const limit = parseInt(req.query.limit);
  let products = productManager.getProducts();

  if (!isNaN(limit)) {
    products = products.slice(0, limit);
  }

  res.json(products);
});

app.get("/products/:pid", async (req, res) => {
  const productId = parseInt(req.params.pid);

  try {
    const product = productManager.getProductById(productId);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: "Producto no encontrado" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Express en http://localhost:${PORT}`);
});
