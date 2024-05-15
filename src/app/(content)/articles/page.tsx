import { Articles } from "@/pages/articles";
import { ServerResponse } from "@/types";

async function getData(): Promise<ServerResponse> {
  const res = await fetch("http://localhost:3000/articles.json");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata() {
  const {
    props: {
      pageProps: { metaData },
    },
  } = await getData();

  return {
    title: metaData.title,
    description: metaData.description,
    keywords: metaData.keywords,
  };
}

export default async function Page() {
  const {
    props: { pageProps },
  } = await getData();
  return (
    <main>
      <Articles data={pageProps} />
    </main>
  );
}
