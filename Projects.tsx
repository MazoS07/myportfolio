import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & TypeScript based app for managing and organizing your task efficiently.",
        img: "/project-011.png",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Weather Widget",
        desc: "A Next.js and TypeScript based tool for fetching and displaying real-time weather data.",
        img: "/project-02.png",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Static Interactive Resume",
        desc: "A TypeScript based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/project-05.png",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
        id: 3,
        title: "Simple Calculator project",
        desc: "A basic HTML CSS and TypeScript calculator for performing essential arithematic operations.",
        img: "/project-04.png",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
        id: 4,
        title: "Crown Website",
        desc: "A React & typescript based app for managing and organizing your task efficiently.",
        img: "/project - 03.png",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
        id: 5,
        title: "Shareable Resume Builder",
        desc: "A React & typescript based app for managing and organizing your task efficiently.",
        img: "/project-06.png",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default Projects