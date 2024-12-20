import { Archivo_Black, Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Fonts
const archivoBlack = Archivo_Black({
    subsets: ["latin"],
    weight: "400", // There is only 400
    variable: "--font-archivo-black",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${archivoBlack.variable} ${inter.variable}`}
        >
            <body className="body">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}