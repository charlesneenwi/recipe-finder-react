import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">
            Recipe Finder
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Discover delicious meals, explore categories, and save your
            favourite recipes all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/favourites" className="hover:text-white transition">
                Favourites
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-white transition">
                Categories
              </Link>
            </li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Built With
          </h3>
          <p className="mt-3 text-sm text-gray-400">
            React, Tailwind CSS, React Router and TheMealDB API.
          </p>
        </div>

      </div>

      <div className="border-t border-white-800 text-center py-4 text-sm text-white-800">
        © {new Date().getFullYear()} Recipe Finder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;