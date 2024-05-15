import { ContentNavigation } from "@/components/contentNavigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ContentNavigation />
      {children}
    </>
  );
}
