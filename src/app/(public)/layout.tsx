import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSession } from "@/lib/auth";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const user = session?.user;

  return (
    <>
      <Navbar user={user} />
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>
      <Footer />
    </>
  );
}
