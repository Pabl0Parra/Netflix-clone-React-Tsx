import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 150,
        bgcolor: "inherit",
      }}
    >
      <Box>
        <Divider>
          <Typography color="grey.700" variant="h5">
            Built with ❤️ by {""}
            <Link
              href="https://www.linkedin.com/in/pablo-parra-bcn"
              underline="none"
              sx={{ color: "text.primary" }}
              target="_blank"
            >
              Pabl0Parra
            </Link>
          </Typography>
        </Divider>
      </Box>
    </Box>
  );
}
