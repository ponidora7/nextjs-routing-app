// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-100 p-4">
      <h1 className="text-5xl font-bold text-indigo-800 mb-6">
        Welcome to My Next.js Routing App!
      </h1>{" "}
      <p className="text-xl text-indigo-700 text-center max-w-2xl mb-8">
        Explore different pages using the navigation bar above.{" "}
      </p>{" "}
      <div className="flex space-x-4">
        <Link
          href="/about"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Go to About{" "}
        </Link>{" "}
        <Link
          href="/contact"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Go to Contact{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
}
