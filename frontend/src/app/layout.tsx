import { Archivo_Black, Inter, Archivo_Narrow, Bebas_Neue, Fjalla_One, Oswald } from "next/font/google";
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

const archivoNarrow = Archivo_Narrow({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // There is only 400
    variable: "--font-archivo-narrow",
});

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400", // There is only 400
    variable: "--font-bebas-neue",
});

const fjallaOne = Fjalla_One({
    subsets: ["latin"],
    weight: "400", // There is only 400
    variable: "--font-fjalla-one",
})

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    variable: "--font-oswald",
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`
                    ${archivoBlack.variable}
                    ${inter.variable}
                    ${archivoNarrow.variable}
                    ${bebasNeue.variable}
                    ${fjallaOne.variable}
                    ${oswald.variable}
            `}
        >
            <body className="body">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}