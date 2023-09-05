import './App.css';
import Content from './Content/Content';
import NavBar from './Navigation/NavBar';
import SideBar from './Sidebar/SideBar';
import { useEffect, useState } from 'react';
import projectsArray from './data/projects.json';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './About/About';

function App() {
  let [width, setWidth] = useState((window.innerWidth));

  let [height, setHeight] = useState(window.innerHeight);

  const [short, setShort] = useState(true);

  const [projects, setProjects] = useState(projectsArray);

  useEffect(() => {
    if (projects) {
      if (projectsArray !== projects) {
        console.log('Update triggered');
        projectsArray = projects;
      }
    }
  }, [projects])


  window.addEventListener('resize', () => {
    if (width === window.innerWidth || (height === window.innerHeight)) return;
    setWidth((window.innerWidth));
    setHeight(window.innerHeight);
  });



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/About_Me' index={true} element={
          <>
            <About />
            <NavBar projects={projects} setProjects={setProjects} showSearchbar={false} toggler={setShort} short={short} width={width} height={height} />
            {(!short || width > 800) && <SideBar toggler={setShort} short={short} width={width} height={height} />}
          </>
        } />
        <Route path='/projects' element={
          <>
            <div className="App">
              <NavBar projects={projects} setProjects={setProjects} showSearchbar={true} toggler={setShort} short={short} width={width} height={height} />
              {(!short || width > 800) && <SideBar toggler={setShort} short={short} width={width} height={height} />}
              <Content projects={projects} setProjects={setProjects} width={width} height={height} />
            </div></>
        } />
        <Route path='*' element={<>
          <NavBar projects={projects} setProjects={setProjects} showSearchbar={false} toggler={setShort} short={short} width={width} height={height}/>
          {(!short || width > 800) && <SideBar toggler={setShort} short={short} width={width} height={height} />}
        </>
        } />

      </Routes>
    </BrowserRouter >);
}

export default App;
