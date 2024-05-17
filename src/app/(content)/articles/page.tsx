import { getData } from "@/lib/getData";
import { Articles } from "@/pages/articles";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const {
    pageProps: { metaData },
  } = await getData(searchParams);

  return {
    title: metaData.title,
    description: metaData.description,
    keywords: metaData.keywords,
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { pageProps } = await getData(searchParams);
  return (
    <main>
      <Articles data={pageProps} />
    </main>
  );
}
