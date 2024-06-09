import Logo from '../assets/Logo.svg';
import Question from '../assets/Question.svg';
import England from '../assets/England.svg';

const Navbar = () => {
    return (
        <div className="container mx-auto w-10/12 flex items-center justify-between">
            <div className="w-24 h-24">
                <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
            </div>

            <div className="flex items-center gap-4">
                <img src={England} alt="England" className="w-12 h-12 object-contain" />
                <img src={Question} alt="Question" className="w-12 h-12 object-contain" />
            </div>
        </div>
    )
}

export default Navbar;
