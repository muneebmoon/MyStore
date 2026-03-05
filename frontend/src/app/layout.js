export const metadata = {
  title: "My Store",
  description: "Women's Boutique Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
