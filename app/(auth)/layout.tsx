export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="absolute top-0 left-0 h-screen flex items-center justify-center w-screen bg-primary">
      {children}
    </main>
  );
}