import { PrepNav } from "@/components/prep/PrepNav";

export default function PrepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PrepNav />
      <main className="pt-14">
        {children}
      </main>
    </>
  );
}
