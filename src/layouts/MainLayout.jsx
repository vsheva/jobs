import { Outlet } from 'react-router-dom';
import Navbar from '../componets/Navbar';

const MainLayout = () => {
  //return <div>MainLayout</div>;
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
