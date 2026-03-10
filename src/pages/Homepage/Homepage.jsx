import * as home from './styled';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <home.Container />
    </>
  );
}
