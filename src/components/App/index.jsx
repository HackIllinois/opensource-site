import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Quote from 'components/Quote';
import ben from 'assets/mentors/ben.jpg';
import blaine from 'assets/mentors/blaine.png';
import tyler from 'assets/mentors/tyler.jpg';

import StackGrid from 'react-stack-grid';
import Project from 'components/Project';
import apache from 'assets/projects/apache.png';
import conda from 'assets/projects/conda.png';
import donejs from 'assets/projects/donejs.png';
import firebase from 'assets/projects/firebase.png';
import gulpjs from 'assets/projects/gulpjs.png';
import jupyter from 'assets/projects/jupyter.png';
import npm from 'assets/projects/npm.png';
import numpy from 'assets/projects/numpy.png';
import pandas from 'assets/projects/pandas.png';
import powershell from 'assets/projects/powershell.png';
import prairielearn from 'assets/projects/prairielearn.png';
import puppeteer from 'assets/projects/puppeteer.png';
import istanbul from 'assets/projects/istanbul.png';
import julia from 'assets/projects/julia.png';
import react from 'assets/projects/react.png';
import rust from 'assets/projects/rust.png';
import rustbridge from 'assets/projects/rustbridge.jpeg';
import rustcookbook from 'assets/projects/rustcookbook.png';
import spack from 'assets/projects/spack.png';
import yargs from 'assets/projects/yargs.png';

import './style.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>HACKILLINOIS</h1>
          <h1>Open Source</h1>

          <hr />

          <div className="tagline">
            <p>Every year, we bring the best <b>open source engineers</b> in the world to work with <b>college students</b> on open source.</p>
          </div>

          <p>Last year, we had</p>
          <div>
            <div className="stat">
              <h2>1,738</h2>
              <p>Students</p>
            </div>
            <div className="stat">
              <h2>200</h2>
              <p>Pull Requests</p>
            </div>
            <div className="stat">
              <h2>52</h2>
              <p>Mentors</p>
            </div>
          </div>
        </div>

        <Carousel autoPlay={true} infiniteLoop={true} interval={10000} showArrows={false} showStatus={false} showThumbs={false}>
          <Quote
            quote="Instead of emphasizing competition, HackIllinois emphasizes teaching and introducing a new generation of developers to the collaborative open-source process – this is a phenomenal way to get fresh faces contributing to OSS projects."
            image={ben}
            name="Ben Coe"
            project="NPM" />
          <Quote
            quote="It’s been really invigorating to get this many pull requests. I’ve merged ten pull requests this weekend, which is probably more than I’ve gotten in the last six months for this project."
            image={blaine}
            name="Blaine Bublitz"
            project="Gulp.js" />
          <Quote
            quote="HackIllinois gives students the opportunity to learn something new while also giving back to the open source community that we all love. By showing that open source projects are approachable, HackIllinois is helping get more people into open source which is great for growing the community!"
            image={tyler}
            name="Tyler Leonhardt"
            project="PowerShell" />
        </Carousel>

        <hr />

        <h2>Projects</h2>
        <StackGrid
          className="projects"
          columnWidth={240}
          duration={0}
          gutterWidth={30}
          gutterHeight={30}
          monitorImagesLoaded={true}>
          <Project
            key="key21"
            image={rust}
            name="Rust"
            description="A language empowering everyone to build reliable and efficient software"
            link="https://github.com/rust-lang" />
          <Project
            key="key6"
            image={firebase}
            name="Firebase"
            description="A mobile app development platform that provides data analysis and database web services for developers"
            link="https://github.com/firebase" />
          <Project
            key="key4"
            image={conda}
            name="Conda"
            description="An OS-agnostic, system-level binary package manager"
            link="https://github.com/conda" />
          <Project
            key="key20"
            image={react}
            name="React Native Emoji Input"
            description="A fully-featured emoji keyboard for React Native"
            link="https://github.com/sskhandek/react-native-emoji-input" />
          <Project
            key="key5"
            image={donejs}
            name="DoneJS"
            description="The best way to get your application done"
            link="https://github.com/donejs" />
          <Project
            key="key7"
            image={gulpjs}
            name="Gulp.js"
            description="A streaming build system"
            link="https://github.com/gulpjs" />
          <Project
            key="key8"
            image={julia}
            name="Julia"
            description="A fresh approach to numerical computing"
            link="https://github.com/JuliaLang" />
          <Project
            key="key9"
            image={jupyter}
            name="Jupyter"
            description="Interactive computing"
            link="https://github.com/jupyter" />
          <Project
            key="key12"
            image={npm}
            name="NPM"
            description="A package manager for JavaScript"
            link="https://github.com/npm" />
          <Project
            key="key14"
            image={pandas}
            name="Pandas"
            description="A flexible and powerful data analysis / manipulation library for Python"
            link="https://github.com/pandas-dev" />
          <Project
            key="key15"
            image={powershell}
            name="PowerShell"
            description="A task automation and configuration management framework from Microsoft"
            link="https://github.com/PowerShell" />
          <Project
            key="key2"
            image={apache}
            name="Apache Mesos"
            description="A cluster manager that provides efficient resource isolation and sharing across distributed applications, or frameworks"
            link="https://github.com/apache/mesos" />
          <Project
            key="key17"
            image={puppeteer}
            name="Puppeteer"
            description="A Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol"
            link="https://github.com/GoogleChrome/puppeteer" />
          <Project
            key="key18"
            image={istanbul}
            name="Puppeteer to Istanbul"
            description="Convert coverage from the format outputted by puppeteer to a format consumable by Istanbul"
            link="https://github.com/istanbuljs/puppeteer-to-istanbul" />
          <Project
            key="key22"
            image={rustbridge}
            name="Rust Bridge"
            description="We want to teach you how to program in Rust. Yes, you."
            link="https://github.com/rustbridge" />
          <Project
            key="key16"
            image={prairielearn}
            name="PrairieLearn"
            description="An online problem-driven learning system"
            link="https://github.com/PrairieLearn" />
          <Project
            key="key23"
            image={rustcookbook}
            name="Rust Cookbook"
            description="A collection of simple Rust examples that demonstrate good practices to accomplish common programming tasks, using the crates of the Rust ecosystem"
            link="https://github.com/rust-lang-nursery/rust-cookbook" />
          <Project
            key="key24"
            image={spack}
            name="Spack"
            description="A flexible package manager that supports multiple versions, configurations, platforms, and compilers"
            link="https://github.com/spack" />
          <Project
            key="key26"
            image={yargs}
            name="Yargs"
            description="The modern, pirate-themed successor to optimist"
            link="https://github.com/yargs" />
          <Project
            key="key13"
            image={numpy}
            name="NumPy"
            description="The fundamental package for scientific computing with Python"
            link="https://github.com/numpy" />
          <Project
            key="key1"
            image={apache}
            name="Apache Airvata"
            description="A software framework to executing and managing computational jobs on distributed computing resources"
            link="https://github.com/apache/airavata" />
        </StackGrid>
      </div>
    );
  }
}

export default App;
