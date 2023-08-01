class ProductManager {
  constructor() {
    this.products = [];
    this.productId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const existingProduct = this.products.find(
      (product) => product.code === code
    );
    if (existingProduct) {
      throw new Error("El código de producto ya está en uso.");
    }

    const newProduct = {
      id: this.productId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(newProduct);
    this.productId++;

    console.log("Producto agregado:");
    console.log(newProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductById(productId) {
    const product = this.products.find((product) => product.id === productId);

    if (!product) {
      throw new Error("Not Found");
    }

    return product;
  }

  updateProduct(productId, updatedFields) {
    const productIndex = this.products.findIndex(
      (product) => product.id === productId
    );

    if (productIndex === -1) {
      throw new Error("Producto no encontrado para actualizar.");
    }

    const updatedProduct = {
      ...this.products[productIndex],
      ...updatedFields,
      id: productId, // Asegurarse de mantener el mismo ID.
    };

    this.products[productIndex] = updatedProduct;

    console.log("Producto actualizado:");
    console.log(updatedProduct);
  }

  deleteProduct(productId) {
    const productIndex = this.products.findIndex(
      (product) => product.id === productId
    );

    if (productIndex === -1) {
      throw new Error("Producto no encontrado para eliminar.");
    }

    this.products.splice(productIndex, 1);

    console.log(`Producto con ID ${productId} eliminado.`);
  }
}

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

/* 
// Crear una instancia de la clase ProductManager
const productManager = new ProductManager();

// Obtener productos (debería estar vacío)
const products1 = productManager.getProducts();
console.log(products1); // []

// Agregar un producto
try {
  productManager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
  );
} catch (error) {
  console.log("Error:", error.message);
}

// Obtener productos (debería incluir el producto recién agregado)
const products2 = productManager.getProducts();
console.log(products2);

// Intentar agregar un producto con el mismo código (debe arrojar un error)
try {
  productManager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
  );
} catch (error) {
  console.log("Error:", error.message);
}

// Obtener un producto por su ID (debería encontrarlo)
try {
  const product = productManager.getProductById(1);
  console.log("Producto encontrado:", product);
} catch (error) {
  console.log("Error:", error.message);
}

// Intentar obtener un producto con un ID inexistente (debe arrojar un error)
try {
  const product = productManager.getProductById(10);
  console.log("Producto encontrado:", product);
} catch (error) {
  console.log("Error:", error.message);
}

try {
  productManager.updateProduct(1, {
    title: "Producto actualizado",
    price: 300,
  });
} catch (error) {
  console.log("Error:", error.message);
}

// Ejemplo de uso del método deleteProduct
try {
  productManager.deleteProduct(1);
} catch (error) {
  console.log("Error:", error.message);
}
 */
module.exports = ProductManager;
