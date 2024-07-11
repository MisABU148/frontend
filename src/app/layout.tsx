import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: { author: string; description: string; title: string } = {
    title: "My resume",
    author: "Maria Ilyina",
    description: "The website with my resume at the time of July 2024",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>{metadata.title}</title>
            <link rel="icon" href="/frontend/images/favicon.ico"/>
            <meta name="author" content={metadata.author}/>
            <meta name="description" content={metadata.description}/>
        </head>
        <body className={inter.className}>
        <header>{children}</header>
        <footer></footer>
        </body>
        </html>
    );
}
