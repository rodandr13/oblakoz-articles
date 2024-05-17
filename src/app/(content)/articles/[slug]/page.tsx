import { notFound } from "next/navigation";

import { getData } from "@/lib/getData";
export async function generateStaticParams() {
  const res = await getData();
  const hrefs = res.pageProps.articles.map((article) => article.href);
  return hrefs.map((href) => ({
    slug: href,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return null;
}
