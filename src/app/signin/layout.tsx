export const metadata = {
  title: "signin",
  description: "signinのページコンポーネントです",
};

export default function SpecSeatEditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
