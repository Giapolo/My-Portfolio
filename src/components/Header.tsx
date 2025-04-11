import photoIdentite from "../../public/photo-identite.jpg";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header () {

const SocialMedia = 
    [
        {socialName: "GitHub" , socialUrl:"https://github.com/Giapolo?tab=repositories"},
        {socialName: "LinkedIn", socialUrl: "https://www.linkedin.com/in/maxime-giampaoli-0a25302a4/"}
    ]


    return (

        <>
        <section className="flex flex-col items-center gap-10 text-sm">
        <h1>Développeur web Full Stack</h1>
        <h2 className="font-medium text-xl">Maxime GIAMPAOLI</h2>
        <img className="w-40 border-2 rounded-md border-amber-600" src={photoIdentite} alt="Photo de profil"/>
        <nav>
            <ul className = "flex flex-row gap-10 ">
                {SocialMedia.map((social, index) =>
                <li className ="border-2 rounded-md p-1 bg-amber-600" key={index}>
                    <a className="flex items-center gap-4 text-xl" href= {social.socialUrl}>
                        {social.socialName === "GitHub" ? <FaGithub/> : <FaLinkedin />}{social.socialName}</a>
                </li>
                )}
                
            </ul>
        </nav>
        </section>
        </>
    )
}

export default Header;