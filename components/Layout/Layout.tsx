import CookieConsent from '../Banners/CookieConsent';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'
type Props = {
    children?: React.ReactNode;
  };
export default function Layout({children}:Props) {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
    </>
  )
}