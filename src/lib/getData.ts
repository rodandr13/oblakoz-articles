import { ServerResponse } from "@/types";

export const getData = async (searchParams?: {
  [key: string]: string | string[] | undefined;
}): Promise<ServerResponse> => {
  const params = searchParams
    ? new URLSearchParams(searchParams as Record<string, string>).toString()
    : "";
  const url = `https://oblakoz.ru/_next/data/esjhMY5ByOOl77eVcZQmS/articles.json${params ? "?" + params : ""}`;

  const res = await fetch(url, { next: { revalidate: 10 } });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
