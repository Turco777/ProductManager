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
}

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