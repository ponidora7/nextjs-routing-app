import "./globals.css";
import Navbar from "../components/Navbar"; // Import the Navbar component

export const metadata = {
  title: "Next.js Routing App",
  description: "An example of routing in Next.js with structured files",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Use the Navbar component here */}{" "}
        <main> {children} </main>{" "}
      </body>{" "}
    </html>
  );
}
