import SocialLogin from "@/components/auth/social-login";

export default function Login() {
   return (
      <main>
         <section className="h-screen grid place-items-center">
            <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
               <h4 className="font-bold text-2xl">Sign in</h4>
               <form className="login-form">
                  <div>
                     <label htmlFor="email">Email Address</label>
                     <input type="email" name="email" id="email" />
                  </div>

                  <div>
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" id="password" />
                  </div>

                  <button type="submit" className="btn-primary w-full mt-4">
                     Login
                  </button>
               </form>

               <div className="text-center text-xs text-gray-500">
                  or Signup with
               </div>
               <SocialLogin />
            </div>
         </section>
      </main>
   );
}
