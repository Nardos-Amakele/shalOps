export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-200 text-black py-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 text-center">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo */}
          <div className="text-xl font-bold text-[#563589]">ShalOps</div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-10 mt-4 sm:mt-0 text-sm text-center sm:text-left">
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#about" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:underline">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Service</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#portfolio" className="hover:underline">
                    Systems Development
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:underline">
                    App Development
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:underline">
                    Web Design
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mt-10 gap-4">
          {/* Copyright */}
          <div className="text-xs text-gray-600">
            Copyright 2025 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
