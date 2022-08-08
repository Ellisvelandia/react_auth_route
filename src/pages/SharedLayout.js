import { Link, Outlet } from 'react-router-dom';
import StyledNavbar from '../Components/StyleNavbar';

const Home = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};
export default Home;