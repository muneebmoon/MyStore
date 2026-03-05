import './globals.css'
import Announcement from './_components/announcement'
import MainNavBar from './_components/mainNavBar'
export const metadata = {
  title: "My Store",
  description: "Women's Boutique Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Announcement />
        <MainNavBar />
        {children}
      </body>
    </html>
  );
}
