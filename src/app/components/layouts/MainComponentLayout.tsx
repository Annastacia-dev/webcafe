import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const MainComponentLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainComponentLayout;