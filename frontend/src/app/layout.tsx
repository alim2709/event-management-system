import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="test">
                <Header />
                <main>{children}</main> {/* Сюда будут рендериться страницы */}
                <Footer />
            </body>
        </html>
    );
}
