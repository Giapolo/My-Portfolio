import { DiJavascript1, DiReact } from 'react-icons/di';
import { SiTypescript, SiExpress } from 'react-icons/si';
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";


function Main () {

    interface ContactInterface {
        myPhone: string;
        myEmail: string;
        myExperience: string;
        myLanguage: string;

    }

    const contact : ContactInterface = 
        {
            myPhone: "06 37 16 76 89",
            myEmail: "maxime.giampaoli@gmail.com",
            myExperience : "Junior",
            myLanguage : "Français"

        }
    


    return (

        <>
        <section className=" mt-10">
        <h2 className= "font-medium text-3xl ">A Propos</h2>
        <section className="border-2 bg-amber-600 mt-4  rounded-lg">
        <ul className="mt-10 flex flex-col items-start font-semibold p-2 ">
            <li>
               Téléphone : {contact.myPhone}
            </li>
            <li>
                Email : {contact.myEmail}
            </li>
            <li>Expérience : {contact.myExperience}</li>
            <li>Langue : {contact.myLanguage}</li>
        </ul>
        <p className= "mt-10 p-2 leading-relaxed">
        Développeur web en formation à la Wild Code School, je suis Maxime Giampaoli, 26 ans. Ma reconversion professionnelle m'a conduit vers le développement, où j'allie rigueur et créativité pour concevoir des applications web fonctionnelles. Je maîtrise JavaScript, Node.js, TypeScript, React et Express, compétences que j'approfondis quotidiennement. Passionné par l'apprentissage constant qu'offre ce domaine, je m'investis pleinement dans chaque projet pour créer des solutions digitales pertinentes et innovantes.
        </p>
        </section>
        </section>
        <section className="mt-8">
            <h2 className="text-2xl ">Formation</h2>
            <ul className="mt-4  border-2 bg-amber-600  rounded-lg">
                    <li><span className="font-bold">Wild Code School</span> <br />remote 2025</li>
                    <li className="mt-4 mb-2"><span className="font-bold">Bac Pro Vente</span> <br />Mention Bien - Section Européenne</li>
            </ul>
        </section>

            
            <h2 className="text-2xl mt-8">Expérience</h2>
            <ul className="mt-4 border-2 bg-amber-600  rounded-lg flex items-start flex-col p-2">
                <li><span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full mr-2 mb-2 bg-red-600 hover:scale-110"><FaHtml5 /><FaCss3Alt className="mr-2"/>HTML / CSS :</span>Utilisation de Tailwind et création d'une page vitrine.</li>
                <li><span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full mr-2 mb-2 bg-yellow-600 hover:scale-110"><DiJavascript1 className="mr-2" />JavaScript :</span> Création d'une To Do List.</li>
                <li><span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full mr-2 mb-2 bg-green-600 text-white hover:scale-110"><FaNodeJs className="mr-2"/>Node.JS : </span>Utilisation de package NPM.</li>
                <li><span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full mr-2 mb-2 bg-blue-600 text-white hover:scale-110"><SiTypescript className="mr-2"/>TypeScript :</span>Typage explicite, Refactorisation. </li>
                <li><span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full mr-2 mb-2 bg-blue-400 text-white hover:scale-110"><DiReact className="mr-2"/>React :</span>Création d'une page de recherche des villes Françaises / React Router.</li>
                <li><span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full mr-2 mb-2 bg-gray-700 text-white hover:scale-110"><SiExpress className="mr-2" />Express :</span>Gestion de requête HTTP / création et utilisation d'API</li>
            </ul>

            <h2 className="mt-12 text-2xl">Mes Projets</h2>
            <section className="mt-8 border-2 p-2 flex flex-row justify-between gap-4 bg-amber-600 rounded-lg">
                <div className="relative w-1/2">
                <label className="absolute top-0 left-0 right-0 text-xl text-center z-10 p-1">Création d'une To Do List en groupe - JavaScript (utilisation de GitHub)</label>
            <video autoPlay muted loop className="w-full h-48 rounded-md mt-16 mb-8 "><source src="./todovideo.mp4" type="video/mp4"/></video>
            <a className="text-center font-bold p-1 border-2 bg-stone-800 rounded-full"
        href="https://github.com/Belovitchy/To_do_list" 
        target="_blank" 
        rel="noopener noreferrer"
        
    >
        Voir sur GitHub
    </a>
                </div>
                <div className="relative w-1/2">
            <label className="absolute top-0 left-0 right-0 text-xl text-center z-10 p-1">Moteur de recherche en React, travail de groupe (utilisation de Github)</label>
            <video autoPlay muted loop className="w-full h-48 rounded-md mt-16 position: relative mb-8"><source src="./VillageWorkshop.mp4" type="video/mp4"/></video>
            <a className="text-center font-bold p-1 border-2 bg-stone-800 rounded-full"
        href="https://github.com/rahmoundif/villageworkshop" 
        target="_blank" 
        rel="noopener noreferrer"
        
    >
        Voir sur GitHub
    </a>
                </div>
            </section>
        </>
    )
}

export default Main