import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 p-4 text-red-800">
      <h1 className="text-6xl font-extrabold mb-4"> 404 </h1>{" "}
      <h2 className="text-3xl font-semibold mb-6"> Page Not Found </h2>{" "}
      <p className="text-lg text-center mb-8">
        Oops!The page you are looking for does not exist.{" "}
      </p>{" "}
      <Link
        href="/"
        className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300"
      >
        Go to Home{" "}
      </Link>{" "}
    </div>
  );
}
