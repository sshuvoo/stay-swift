import facebook from "@/public/assets/fb.png";
import google from "@/public/assets/google.png";
import Image from "next/image";

export default function SocialLogin() {
   return (
      <div className="flex gap-4">
         <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
            <Image src={facebook} alt="fb-logo" />
            <span>Facebook</span>
         </button>
         <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
            <Image src={google} alt="google-logo" />
            <span>Google</span>
         </button>
      </div>
   );
}
