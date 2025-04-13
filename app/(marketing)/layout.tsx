export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-black">
      {children}
    </main>
  );
} 