import { Typography, Card, CardHeader, List } from "@mui/material";

export default function ResumeSection({ title, children }:
  { title: string, children: React.ReactNode }
) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader 
        title={<Typography variant="h4">{title}</Typography>}
      />
      <List>
        {children}
      </List>
    </Card>
  );
}
