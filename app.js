const express = require("express");
const app = express();
const ProductManager = require("./ProductManager");

const PORT = 8080;

const productManager = new ProductManager();


//! Agrego 10 productos
productManager.addProduct(
  "Arroz",
  "Descripción del producto 1",
  100,
  "URL de la imagen del producto 1",
  "code1",
  530
);

productManager.addProduct(
  "Leche",
  "Descripción del producto 2",
  200,
  "URL de la imagen del producto 2",
  "code2",
  310
);

productManager.addProduct(
  "Carne de cerdo",
  "Descripción del producto 3",
  1000,
  "URL de la imagen del producto 3",
  "code3",
  500
);

productManager.addProduct(
  "Queso",
  "Descripción del producto 4",
  250,
  "URL de la imagen del producto 4",
  "code4",
  300
);

productManager.addProduct(
  "Miel",
  "Descripción del producto 5",
  120,
  "URL de la imagen del producto 5",
  "code5",
  10
);

productManager.addProduct(
  "Pan",
  "Descripción del producto 6",
  150,
  "URL de la imagen del producto 6",
  "code6",
  350
);

productManager.addProduct(
  "Yerba",
  "Descripción del producto 7",
  400,
  "URL de la imagen del producto 7",
  "code7",
  40
);

productManager.addProduct(
  "Carne",
  "Descripción del producto 8",
  1250,
  "URL de la imagen del producto 8",
  "code8",
  342
);

productManager.addProduct(
  "Pollo",
  "Descripción del producto 9",
  750,
  "URL de la imagen del producto 9",
  "code9",
  5200
);

productManager.addProduct(
  "Tabaco",
  "Descripción del producto 10",
  500,
  "URL de la imagen del producto 18 ",
  "code10",
  25
);

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
