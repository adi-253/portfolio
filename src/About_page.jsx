import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // compulsory for animations 

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once:false, // whether animation should happen only once - while scrolling down or both the times
        });
    }, []);
   // in react we can use class instead of className now  but its better to use className to avoid confusion
    return (
        <section className="sec" id="about"> About         
        <div id="Aboutcontainer" data-aos="fade-down">
        I study at NITK SURATHKAL
        </div>
            
        </section>
    );
};

export default About;