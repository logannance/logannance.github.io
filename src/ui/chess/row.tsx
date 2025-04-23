import { Grid } from "@mui/material";


export default function Row({ children }: { children: React.ReactNode }) {
  return (
    <Grid container flexWrap="nowrap">
      {children}
    </Grid>
  )
}