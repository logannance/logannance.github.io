import { List } from "@mui/material";
import VersionListItem from "./version-list-item";


export default function VersionList() {
  return (
    <List>
      <VersionListItem
        title="0.1"
        items={[
          'Create game using React and Typescript',
          'Make classes for each type of piece',
          'Implement moves using generator functions'
        ]}
        normal={true}
      />
      <VersionListItem
        title="0.2"
        items={[
          'Make it so players alternate turns',
          'Only allow captures of the opposing team',
          'Highlight active square'
        ]}
      />
      <VersionListItem
        title="0.3"
        items={[
          'Implement castling',
          'Implement en passant',
          'Allow pawns to turn into other pieces'
        ]}
      />
      <VersionListItem
        title="1.0"
        items={[
          'Add checking behavior for the king',
          'Implement win/loss conditions'
        ]}
      />
    </List>
  );
}