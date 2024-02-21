import './App.css';
import Content from './Content/Content';
import NavBar from './Navigation/NavBar';
import SideBar from './Sidebar/SideBar';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './About/About';



function App() {
  let [width, setWidth] = useState((window.innerWidth));

  let [height, setHeight] = useState(window.innerHeight);

  const [short, setShort] = useState(true);

  const [projects, setProjects] = useState([]);
  let projectsArray = [];

  useEffect(() => {
    if (projects) {
      if (projectsArray !== projects) {
        console.log('Update triggered');
        projectsArray = projects;
      }
    }
  }, [projects]);

  useEffect(() => {
    fetch("https://troubled-series.000webhostapp.com/get-projects.php").then((res) => res.json()).then((json) => {
      setProjects(json);
    })
  }, [])


  window.addEventListener('resize', () => {
    if (width === window.innerWidth || (height === window.innerHeight)) return;
    setWidth((window.innerWidth));
    setHeight(window.innerHeight);
  });



  return (
    <>
      <div className="App">
        <Content projects={projects} setProjects={setProjects} width={width} height={height} />
      </div></>);
}

export default App;
