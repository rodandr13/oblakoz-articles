import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const NotFound = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="8px"
      maxWidth="500px"
      margin="80px auto 0 auto"
    >
      <Image src="/images/searching.svg" alt="" width={106} height={96} />
      <Typography
        fontWeight="500"
        fontSize="1.5rem"
        lineHeight="1.25"
        color="rgb(104, 104, 109)"
      >
        По выбранным параметрам ничего не найдено
      </Typography>
    </Box>
  );
};
