import { List, ListItem, ListItemText, Typography } from "@mui/material";


export default function VersionListItem(
  {
    title,
    items,
    normal
  }: {
    title: string,
    items: string[],
    normal?: true
  }
) {
  return <>
    <ListItem>
      <ListItemText>
        <Typography variant="h2">Version {title} {!normal && '(To-do)'}</Typography>
      </ListItemText>
    </ListItem>
    <List sx={{ marginLeft: '1rem'}}>
      {items.map((x, i) => (
        <ListItem key={i}>
          <ListItemText>{x}</ListItemText>
        </ListItem>
      ))}
    </List>
  </>
}