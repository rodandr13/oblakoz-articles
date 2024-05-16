import { Articles } from "@/pages/articles";
import { ServerResponse } from "@/types";

async function getData(searchParams: {
  [key: string]: string | string[] | undefined;
}): Promise<ServerResponse> {
  const params = new URLSearchParams(
    searchParams as Record<string, string>
  ).toString();
  const url = `https://oblakoz.ru/_next/data/esjhMY5ByOOl77eVcZQmS/articles.json?${params}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

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
