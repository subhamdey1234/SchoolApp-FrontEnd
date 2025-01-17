const Login = () => {
  return (
    <>
    <div
    style={{
      background:"rgba(10, 10,150, 0.15)",
      backdropFilter:"blur(10px)",
      WebkitBackdropFilter:"blur(10px)",
      border:"1px solid rgba(255, 255, 255, 0.3)",
      borderRadius:"12px",
      boxShadow:" 0 0px 20px black"

    }}
    
    className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-[400px] m-auto mt-6">

  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-28 w-auto" src="https://marketplace.canva.com/EAGLvNcMY10/1/0/1600w/canva-white-and-blue-illustrative-class-logo-mjY8ushmYT4.jpg" alt="Your Company"/>
    <h1 className="text-lg text-center font-bold mt-3 text-white ">Nirmala School</h1>
    <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-white">Log-in to your account</h2>
  </div>

  <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label for="email" className="block text-sm/6 font-medium text-white">Email address</label>
        <div className="mt-2">
          <input type="email" placeholder="enter the email" name="email" id="email" autocomplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm/6 font-medium text-white">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-red-400 hover:text-green-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input type="password" name="password" placeholder="enter the password" id="password" autocomplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm/6 text-white">
      Not a member? 
      <a href="#" className="font-semibold text-blue-500 hover:text-indigo-500">   Start a 14 day free trial</a>
    </p>
  </div>
</div>
 </>
  );
};

export default Login;
