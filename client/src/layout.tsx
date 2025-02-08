
export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-grey min-h-screen">
      {children}
    </main>
  );
}