import Image from "next/image";
import logo from "@/public/assets/stayswift.svg";
import Link from "next/link";

export default function Navbar() {
   return (
      <nav>
         <Link href="/">
            <Image src={logo} alt="Stay Swift Logo" />
         </Link>
         <ul>
            <li>
               <a href="#">Recommended Places</a>
            </li>

            <li>
               <a href="#">About Us</a>
            </li>

            <li>
               <a href="#">Contact us</a>
            </li>

            <li>
               <a href="./bookings.html">Bookings</a>
            </li>

            <li>
               <a href="./login.html" className="login">
                  Login
               </a>
            </li>
         </ul>
      </nav>
   );
}
