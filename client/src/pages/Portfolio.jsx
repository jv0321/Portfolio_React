import React from 'react';
import { Row } from 'react-bootstrap';
import Projects from './components/Projects';

import timeline from '../assets/timeline.png'
import HolidayGeo from '../assets/HolidayGeoImage.png'
import JATE from '../assets/JATE.png'
import techblog from '../assets/techblog.png'
import weatherapp from '../assets/weatherapp.png'
import employeetracker from '../assets/employeetracker.png'



const projectData = [
    {
        title: "Holiday Geofactor",
        subText: "TimeTrack is a dynamic web application designed to empower users in preserving and reliving their most cherished memories. With TimeTrack, users can seamlessly transform their scattered moments into captivating narratives, effortlessly weaving together the threads of their lives.",
        repoURL: "https://github.com/TIrwin19/Holiday_GeoFactor",
        image: HolidayGeo
    },

    {
        title: "Time-Track",
        subText: "TimeTrack is a dynamic web application designed to empower users in preserving and reliving their most cherished memories. With TimeTrack, users can seamlessly transform their scattered moments into captivating narratives, effortlessly weaving together the threads of their lives.",
        repoURL: "https://github.com/WAbreu738/timeline_database",
        image: timeline
    },
    {
        title: "Weather App",
        subText: "This web application provides a weather forecast for any city worldwide. Users can input their desired city, and the app retrieves the current weather conditions along with a 5-day forecast. The app also logs the user's inputted cities, creating a history for easy reference.",
        repoURL: "https://github.com/jv0321/Weather_Dashboard",
        image: weatherapp
    },
    {
        title: "The Tech Blog",
        subText: "Tech Blog is a platform where users can create an account and enjoy dynamic blog post features tailored for the tech community. Share your insights, discoveries, and experiences in the ever-evolving world of technology. The Tech Blog provides an intuitive interface to create, update, and delete blog posts effortlessly.",
        repoURL: "https://github.com/jv0321/Tech_Blog",
        image: techblog
    },
    {
        title: "JATE Text Editor",
        subText: "This PWA Text Editor is a progressive web application that allows users to write and save JavaScript code both online and offline. Built using modern web technologies, this application can be installed on your device and provides a seamless, responsive experience.",
        repoURL: "https://github.com/jv0321/Tech_Blog",
        image: JATE
    },
    {
        title: "Employee Tracker",
        subText: "This Employee Management System is a command-line application built using Node.js, Inquirer, and PostgreSQL. It allows users to perform various actions related to managing employees, roles, and departments within an organization.",
        repoURL: "https://github.com/jv0321/Tech_Blog",
        image: employeetracker
    },
];

function Portfolio() {
    return (
        <section className='portfolio'>
            <div className='my-5 mx-3'>
                <h1>Portfolio</h1>
                <p>Welcome to my portfolio! Explore my projects below to see what I've been working on.</p>
            </div>
            <Row className="g-4">
                {projectData.map((project, index) => (
                    <Projects key={index} itemObj={project} />
                ))}
            </Row>
        </section>
    );
}

export default Portfolio;