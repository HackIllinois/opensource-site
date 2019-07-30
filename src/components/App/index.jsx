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
import confbase from 'assets/projects/confbase.png';
import containerd from 'assets/projects/containerd.png';
import dateutil from 'assets/projects/dateutil.png';
import docker from 'assets/projects/docker.png';
import donejs from 'assets/projects/donejs.png';
import eos from 'assets/projects/eos.png';
import firebase from 'assets/projects/firebase.png';
import git from 'assets/projects/git.png';
import gulpjs from 'assets/projects/gulpjs.png';
import homebrew from 'assets/projects/homebrew.png';
import hyperledger from 'assets/projects/hyperledger.png';
import lineageos from 'assets/projects/lineageos.png';
import jupyter from 'assets/projects/jupyter.png';
import illinois from 'assets/projects/illinois.png';
import npm from 'assets/projects/npm.png';
import numpy from 'assets/projects/numpy.png';
import pandas from 'assets/projects/pandas.png';
import powershell from 'assets/projects/powershell.png';
import puppeteer from 'assets/projects/puppeteer.png';
import julia from 'assets/projects/julia.png';
import react from 'assets/projects/react.png';
import rust from 'assets/projects/rust.png';
import rustbridge from 'assets/projects/rustbridge.jpeg';
import rustcookbook from 'assets/projects/rustcookbook.png';
import spack from 'assets/projects/spack.png';
import vue from 'assets/projects/vue.png';
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
              <h2>952</h2>
              <p>Students</p>
            </div>
            <div className="stat">
              <h2>269</h2>
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
            key="key25"
            image={rust}
            name="Rust"
            description="A quickly growing, multi-paradigm systems programming language"
            link="https://github.com/rust-lang" />
          <Project
            key="key14"
            image={julia}
            name="Julia"
            description="A high-level programming language for numerical analysis and computational science"
            link="https://github.com/JuliaLang" />
          <Project
            key="key10"
            image={git}
            name="Git"
            description="A version control system used by developers around the world"
            link="https://github.com/git" />
          <Project
            key="key9"
            image={firebase}
            name="Firebase"
            description="A database and backend service for mobile and web applications"
            link="https://github.com/firebase" />
          <Project
            key="key11"
            image={gulpjs}
            name="Gulp.js"
            description="A streaming build system for front-end web development"
            link="https://github.com/gulpjs" />
          <Project
            key="key24"
            image={react}
            name="React Native Emoji Input"
            description="A customizable emoji keyboard for mobile apps made with React Native"
            link="https://github.com/sskhandek/react-native-emoji-input" />
          <Project
            key="key17"
            image={npm}
            name="NPM"
            description="A package manager for the Javascript programming language"
            link="https://github.com/npm" />
          <Project
            key="key6"
            image={docker}
            name="Docker"
            description="A tool for creating, deploying, and running applications with containers"
            link="https://github.com/docker" />
          <Project
            key="key1"
            image={apache}
            name="Apache Airavata"
            description="A system used to manage and monitor large-scale distributed applications"
            link="https://github.com/apache/airavata" />
          <Project
            key="key21"
            image={illinois}
            name="PrairieLearn"
            description="An online system for problem-driven learning, developed and used at the University of Illinois"
            link="https://github.com/PrairieLearn" />
          <Project
            key="key2"
            image={conda}
            name="Conda"
            description="A package and environment management system for Python"
            link="https://github.com/conda" />
          <Project
            key="key5"
            image={dateutil}
            name="Dateutil"
            description="A Python module which provides extensions to the standard datetime module"
            link="https://github.com/dateutil" />
          <Project
            key="key7"
            image={donejs}
            name="DoneJS"
            description="A Javascript framework for developing high performance web applications"
            link="https://github.com/donejs" />
          <Project
            key="key12"
            image={homebrew}
            name="Homebrew"
            description="A package management system for downloading common Linux packages on MacOS"
            link="https://github.com/Homebrew" />
          <Project
            key="key13"
            image={hyperledger}
            name="Hyperledger"
            description="A project supporting the collaborative development of blockchain-based ledgers"
            link="https://github.com/hyperledger" />
          <Project
            key="key15"
            image={jupyter}
            name="Jupyter"
            description="A notebook for dynamic development and simple software shareability"
            link="https://github.com/jupyter" />
          <Project
            key="key16"
            image={lineageos}
            name="LineageOS"
            description="An operating system for mobile devices and tablets, based on Android"
            link="https://github.com/LineageOS" />
          <Project
            key="key29"
            image={vue}
            name="Vue"
            description="A lightweight Javascript framework for front-end web development"
            link="https://github.com/vuejs" />
          <Project
            key="key19"
            image={pandas}
            name="Pandas"
            description="A library of data structures and analysis tools used for data science in Python"
            link="https://github.com/pandas-dev" />
          <Project
            key="key20"
            image={powershell}
            name="PowerShell"
            description="A task automation and configuration management framework for Windows"
            link="https://github.com/PowerShell" />
          <Project
            key="key22"
            image={puppeteer}
            name="Puppeteer"
            description="A Javascript library used to automate and test apps in Google Chrome"
            link="https://github.com/GoogleChrome/puppeteer" />
          <Project
            key="key23"
            image={illinois}
            name="Queue"
            description="An office hours queue, developed and used at the University of Illinois"
            link="https://github.com/illinois/queue" />
          <Project
            key="key26"
            image={rustbridge}
            name="Rust Bridge"
            description="A project dedicated to teaching beginners how to code in Rust"
            link="https://github.com/rustbridge" />
          <Project
            key="key27"
            image={rustcookbook}
            name="Rust Cookbook"
            description="A collection of simple examples of good programming practices in Rust"
            link="https://github.com/rust-lang-nursery/rust-cookbook" />
          <Project
            key="key28"
            image={spack}
            name="Spack"
            description="A package manager for installing scientific software on supercomputers, MacOS, and Linux"
            link="https://github.com/spack" />
          <Project
            key="key3"
            image={confbase}
            name="Confbase"
            description="A tool for managing configuration files for use in production"
            link="https://github.com/Confbase" />
          <Project
            key="key30"
            image={yargs}
            name="Yargs"
            description="A pirate-themed library for developing command line tools with Javascript"
            link="https://github.com/yargs" />
          <Project
            key="key18"
            image={numpy}
            name="NumPy"
            description="A Python library for efficient manipulation of mathematical data structures"
            link="https://github.com/numpy" />
          <Project
            key="key8"
            image={eos}
            name="EOS"
            description="A platform for building, deploying, and running blockchain applications"
            link="https://github.com/EOSIO/eos" />
          <Project
            key="key4"
            image={containerd}
            name="Containerd"
            description="A tool for managing configuration files for use in production"
            link="https://github.com/containerd" />
        </StackGrid>
      </div>
    );
  }
}

export default App;
