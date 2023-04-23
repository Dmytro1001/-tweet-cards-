import { NavLink } from 'react-router-dom';
import { HeaderContainer, Container, Logo, List, Link } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <NavLink to="/">
          <Logo />
        </NavLink>

        <nav>
          <List>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tweets">Tweets</Link>
            </li>
          </List>
        </nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
