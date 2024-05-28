import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    4: (
        <InfoBox
        text="Looking to expand your team? I'd love to hear about a new opportunity"
        link="/contact"
        btnText="Let's connect"
        />
    ),
    2: (
        <InfoBox
        text="I specialize in the MERN stack, but have worked with numerous modern frameworks and technologies."
        link="/about"
        btnText="My skills"
        />
    ),
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-medium-pink py-4 px-8 text-white mx-5">Hello! My name is <span className="font-semibold">Candace</span> 🌸
        <br/>
       I am a recent grad from a full stack coding program at MIT
        </h1>
    ),
    3: (
        <InfoBox
        text="I undertake creative and challenging projects to grow as a software developer"
        link="/projects"
        btnText="Visit my portfolio"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}



export default HomeInfo 