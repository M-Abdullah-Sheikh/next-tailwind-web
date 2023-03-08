import React from 'react';
import Navbar from '../components/navbar';
import Main from '../components/main';
import About from '../components/about';
import Skills from '../components/skills';
import Project from '../components/project';
import Contact from '../components/contact';
import Nutshell from '../components/nutshell';
export default function Home() {
  return (
    <>
    <Navbar/>
 <Main/>
 <About/>
 <Nutshell/>
 <Skills/>
 <Project/>
 <Contact/>
 </>
  );
}
