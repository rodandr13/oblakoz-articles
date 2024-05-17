"use client";

import { Box, Link as MuiLink, Typography } from "@mui/material";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";

import { BASE_URL } from "@/lib/constans";
import { Article } from "@/types";

interface Props {
  article: Article;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return format(date, "dd.MM", { locale: ru });
};

const articleLink = {
  textDecoration: "none",
  borderRadius: "18px",
  overflow: "hidden",
  display: "block",
  margin: 0,
  padding: 0,
  "&:hover": {
    boxShadow: "rgba(107, 117, 159, 0.3) 2px 2px 8px",
  },
};

const textContainer = {
  padding: "24px",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const details = {
  display: "flex",
  justifyContent: "space-between",
};

const articleDate = {
  fontSize: "0.875rem",
  lineHeight: "1.143",
  color: "#68686D",
  margin: "0",
  padding: "0",
};

const views = {
  fontSize: "0.875rem",
  color: "#68686D",
  position: "relative",
  "&::before": {
    content: '""',
    display: "inline-block",
    width: "22px",
    height: "16px",
    position: "absolute",
    left: "-30px",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundImage: "url('/images/eye.svg')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
};

const imageContainer = {
  position: "relative",
  background: "linear-gradient(272.84deg, #4AA7FF 13.66%, #4F40FF 97.64%)",
};

const articleTitle = {
  fontWeight: 600,
  fontSize: "1.375rem",
  color: "#38414D",
  lineHeight: "1.18",
  margin: "0",
  padding: "0",
};

export const ArticleCard = ({ article }: Props) => {
  return (
    <Box key={article.id}>
      <MuiLink
        href={`/articles/${article.href}`}
        component={Link}
        sx={articleLink}
      >
        <Box sx={imageContainer}>
          <Image
            src={`${BASE_URL}${article.coverSrc}`}
            alt={article.title}
            width={600}
            height={316}
            style={{
              width: "100%",
              height: "auto",
              margin: "0",
              display: "block",
            }}
          />
        </Box>
        <Box sx={textContainer}>
          <Box sx={details}>
            <Typography sx={articleDate}>
              Статьи • {formatDate(article.date)}
            </Typography>
            <Typography sx={views}>{article.views}</Typography>
          </Box>
          <Box component="h3" sx={articleTitle}>
            {article.title}
          </Box>
        </Box>
      </MuiLink>
    </Box>
  );
};
