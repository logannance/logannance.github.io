import Chess from "@/ui/chess/chess";
import VersionList from "@/ui/chess/version-list";
import { Stack, Typography } from "@mui/material";

export default function Page() {
  return <>
    <Chess />;
    <Stack padding={1}>
      <Typography variant="h1">Info</Typography>
      <VersionList />
    </Stack>
  </>
}