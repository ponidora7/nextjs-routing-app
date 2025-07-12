import Link from "next/link";

export default function ProductDetail({ params }) {
  const { id } = params; // Get the dynamic segment from params

  // Dummy product data
  const productsData = {
    1: {
      name: "Laptop Pro",
      description: "Powerful laptop for professionals.",
      price: "$1200",
    },
    2: {
      name: "Smartphone X",
      description: "Next-gen smartphone with amazing features.",
      price: "$800",
    },
    3: {
      name: "Wireless Headphones",
      description: "Immersive sound experience with noise cancellation.",
      price: "$150",
    },
  };

  const product = productsData[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-100 p-4">
        <p className="text-xl text-orange-800">
          {" "}
          Product with ID {id}
          not found.{" "}
        </p>{" "}
        <Link
          href="/"
          className="ml-4 px-4 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700"
        >
          Go Home{" "}
        </Link>{" "}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-4">
      <h1 className="text-4xl font-bold text-green-800 mb-4">
        {" "}
        Product: {product.name}{" "}
      </h1>{" "}
      <p className="text-lg text-green-700 mb-2"> {product.description} </p>{" "}
      <p className="text-2xl font-semibold text-green-900">
        {" "}
        Price: {product.price}{" "}
      </p>{" "}
      <div className="mt-8">
        <Link
          href="/products/1"
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 mr-2"
        >
          Product 1{" "}
        </Link>{" "}
        <Link
          href="/products/2"
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 mr-2"
        >
          Product 2{" "}
        </Link>{" "}
        <Link
          href="/products/3"
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
        >
          Product 3{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
}
