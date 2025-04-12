import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

export default function IconText({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <Grid container alignItems="center" gap={1}>
      {icon}
      <Typography variant="body1">{text}</Typography>
    </Grid>
  );
}
