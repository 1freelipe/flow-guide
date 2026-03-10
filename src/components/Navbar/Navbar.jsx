import * as nav from './styled';

export default function Navbar() {
  return (
    <nav.Containernav>
      <nav.Logo>
        <nav.Title>Flow</nav.Title>
        <nav.Title className="secondTitle">Guide</nav.Title>
      </nav.Logo>
      <nav.NavLinks>
        <nav.List>
          <nav.NavList>Item 1</nav.NavList>
          <nav.NavList>Item 2</nav.NavList>
          <nav.NavList>Item 3</nav.NavList>
          <nav.NavList>Item 4</nav.NavList>
          <nav.NavList>Item 5</nav.NavList>
        </nav.List>
      </nav.NavLinks>
    </nav.Containernav>
  );
}
