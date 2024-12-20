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
            <body className="body">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
