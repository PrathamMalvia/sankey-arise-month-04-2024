import Navbar from "../components/Navbar";
import travel from '../assets/travel.jpg';
import Facebook from '../assets/Facebook.svg';
import Apple from '../assets/Apple.svg';
import Google from '../assets/Google.svg';

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <hr />

      <div className="container mx-auto my-8 p-4 md:my-20 md:p-14 flex flex-col md:flex-row bg-neutral200 border border-neutral400 w-11/12 md:w-9/12 rounded-xl">

        {/* image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:items-center">
          <div className="w-4/5 rounded-sm">
            <img src={travel} alt="travel" className="w-full h-auto rounded-sm" />
          </div>
        </div>

        {/* register */}
        <div className="w-full md:w-1/2">
          <h4 className="text-xl font-black mb-4">Register</h4>

          <div className="flex flex-col md:flex-row items-center justify-between my-4">
            <div className="w-full md:w-4/5 mb-4 md:mb-0 md:mr-4">
              <h6 className="text-sm font-semibold my-1">First Name</h6>
              <input type="text" name="firstname" id="firstname" placeholder="Pratham" className="w-full h-10 p-2 border border-slate-400 rounded-sm" />
            </div>

            <div className="w-full md:w-4/5">
              <h6 className="text-sm font-semibold my-1">Last Name</h6>
              <input type="text" name="lastname" id="lastname" placeholder="Malvia" className="w-full h-10 p-2 border border-slate-400 rounded-sm" />
            </div>
          </div>

          <div className="my-4">
            <h6 className="text-sm font-semibold my-1">Email</h6>
            <input type="text" name="email" id="email" placeholder="example@gmail.com" className="w-full p-2 h-10 border border-slate-400 rounded-sm" />
          </div>

          <div className="my-4">
            <h6 className="text-sm font-semibold my-1">Password</h6>
            <input type="password" name="password" id="password" placeholder="***************" className="w-full p-2 h-10 border border-slate-400 rounded-sm" />
          </div>

          <div className="my-4">
            <h6 className="text-sm font-semibold my-1">Confirm Password</h6>
            <input type="password" name="confirm-password" id="confirm-password" placeholder="***************" className="w-full p-2 h-10 border border-slate-400 rounded-sm" />
          </div>

          <div className="flex items-center gap-2 my-4">
            <input type="checkbox" name="checkbox" id="checkbox" className="w-5 h-5" />
            <h6 className="text-sm font-medium">I agree to all the Terms and Privacy Policies</h6>
          </div>

          <div className="my-2">
            <button className="w-full h-10 bg-[#07689F] text-white font-bold rounded-sm">Register Now</button>
          </div>

          <div className="flex flex-col items-center gap-2 mt-4">
            <h6 className="text-sm">Already have an account? <b className="text-[#07689F]">Login</b> </h6>
            <h6 className="text-sm">Or</h6>
            <div className="flex items-center gap-4 md:gap-10">
              <img src={Facebook} alt="Facebook" className="w-6 h-6 md:w-8 md:h-8" />
              <img src={Apple} alt="Apple" className="w-6 h-6 md:w-8 md:h-8" />
              <img src={Google} alt="Google" className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default RegisterPage;
