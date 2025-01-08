import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;










// {
//   "name": "numeracraft",
//   "private": true,
//   "version": "0.0.0",
//   "type": "module",
//   "scripts": {
//     "dev": "vite",
//     "build": "tsc -b && vite build",
//     "lint": "eslint .",
//     "preview": "vite preview"
//   },
//   "dependencies": {
//     "@material-ui/core": "4.12.4",
//     "@material-ui/icons": "^4.11.3",
//     "framer-motion": "^11.15.0",
//     "react": "^18.3.1",
//     "react-dom": "^18.3.1",
//     "react-router-dom": "^7.1.1"
//   },
//   "devDependencies": {
//     "@eslint/js": "^9.17.0",
//     "@types/react": "^18.3.18",
//     "@types/react-dom": "^18.3.5",
//     "@types/react-router-dom": "^5.3.3",
//     "@vitejs/plugin-react": "^4.3.4",
//     "autoprefixer": "^10.4.20",
//     "eslint": "^9.17.0",
//     "eslint-plugin-react-hooks": "^5.0.0",
//     "eslint-plugin-react-refresh": "^0.4.16",
//     "globals": "^15.14.0",
//     "postcss": "^8.4.49",
//     "tailwindcss": "^3.4.17",
//     "typescript": "~5.6.2",
//     "typescript-eslint": "^8.18.2",
//     "vite": "^6.0.5"
//   }
// }
