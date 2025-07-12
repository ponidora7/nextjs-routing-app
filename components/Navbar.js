import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-gray-300 transition duration-300"
        >
          My Next.js App{" "}
        </Link>{" "}
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/about"
              className="hover:text-gray-300 transition duration-300"
            >
              About{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition duration-300"
            >
              Contact{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              href="/products/1"
              className="hover:text-gray-300 transition duration-300"
            >
              Product 1{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              href="/products/2"
              className="hover:text-gray-300 transition duration-300"
            >
              Product 2{" "}
            </Link>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
    </header>
  );
}
