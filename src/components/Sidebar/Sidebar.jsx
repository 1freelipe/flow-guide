import * as side from './styled';

export default function Sidebar() {
  return (
    <side.Containerside>
      <side.Sidebar>
        <side.NavList>
          <side.List>Item 1</side.List>
          <side.List>Item 2</side.List>
          <side.List>Item 3</side.List>
          <side.List>Item 4</side.List>
        </side.NavList>
      </side.Sidebar>
    </side.Containerside>
  );
}
