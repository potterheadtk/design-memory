import "./globals.css";

export const metadata = {
  title: "Design Memory",
  description: "Single source of truth for hotel lighting & EMS design decisions"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}