// // components/Navbar.tsx
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className="bg-yellow-400">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
//             </button>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {/* Use 'href' instead of 'to' in the 'Link' component */}
//                 <Link href="/">
//                   {/* Remove the <a> tag */}
//                   <img
//                     className="mx-auto h-12 w-auto" 
//                     src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
//                     alt="Pokemon Image"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// components/Navbar.tsx
// components/Navbar.tsx
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'orange' }}>
      <Toolbar>
        <Link href="/">
          
        <img
                    className="mx-auto h-12 w-auto" 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
                    alt="Pokemon Image"
                  />
          
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



