import { Box } from 'components/Box';
import { HeaderLink } from './SiteHeader.styled';

const SiteHeader = () => {
  return (
    // <div>Header</div>
    <Box as="header">
      <nav>
        <HeaderLink to="/" key="home">Home</HeaderLink>
        <HeaderLink to="movies" key="movies">Movies</HeaderLink>
      </nav>
      <hr/>
    </Box>
  );
};
export default SiteHeader;
