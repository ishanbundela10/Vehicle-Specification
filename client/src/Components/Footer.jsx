import { Car, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-red-500 via-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-black tracking-tight">VehicleSpecification</div>
                <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Drive smarter</div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-xs">
              Your imagination is our priority. Explore dream cars, compare specs, and find the right fit for your journey.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-slate-300">
              <li><Link to="/" className="transition-colors duration-200 hover:text-orange-400">Famous Cars</Link></li>
              <li><Link to="/makedreamcar" className="transition-colors duration-200 hover:text-orange-400">Make Your Dream Car</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Support</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="transition-colors duration-200 hover:text-orange-400">Help Center</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-orange-400">Safety Tips</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-orange-400">Contact Us</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-orange-400">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <span>support@vehiclespec.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>+91 90099 49018</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>Bhopal, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 VehicleSpecification. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-orange-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
