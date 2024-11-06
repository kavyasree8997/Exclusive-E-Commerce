// import localFont from "next/font/local";
// import Header from "@/Components/Home Page/Header";
// import TopHeader from "@/Components/Home Page/TopHeader";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <TopHeader/>
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// }

// app/layout.js
import Footer from '@/Components/Headers/Footer';
import './globals.css';

const Layout = ({ children }) => {
    return ( 
        <html lang="en">
            <body>
                <main className='main'>{children}</main>
            </body>
        </html>        
    );
};

export default Layout;
