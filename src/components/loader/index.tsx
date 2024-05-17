import { CircularProgress, Box } from "@mui/material";

export const Loader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      margin: "100px 0 0 0",
    }}
  >
    <CircularProgress />
  </Box>
);
