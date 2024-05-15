import { ContentNavigation } from "@/components/contentNavigation";
import { PageContainer } from "@/components/pageContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageContainer>
      <ContentNavigation />
      {children}
    </PageContainer>
  );
}
