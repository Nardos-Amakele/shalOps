import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} ShalOps. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-primary"><FaFacebookF /></a>
          <a href="#" className="hover:text-primary"><FaTwitter /></a>
          <a href="#" className="hover:text-primary"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-primary"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
