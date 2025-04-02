import { Link } from "wouter";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4">Extinction Chronicle</h3>
            <p className="text-sm text-gray-400">Telling the stories of endangered species to inspire conservation and action.</p>
          </div>
          <div>
            <h4 className="font-medium mb-3">Learn More</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">About Our Mission</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Extinction Research</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Conservation Partners</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Educational Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Take Action</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Donate</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Spread Awareness</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sign Petitions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="bg-white bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">Have questions? <a href="#" className="text-accent hover:underline">Contact us</a></p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2023 Extinction Chronicle. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
