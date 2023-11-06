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
    <BrowserRouter>
      <Routes>
        <Route path='/projects' element={
          <>
            <div className="App">
              <NavBar projects={projects} setProjects={setProjects} showSearchbar={true} toggler={setShort} short={short} width={width} height={height} />
              {(!short || width > 800) && <SideBar exitFun={async () => {
                setTimeout(() => {
                  let items = document.querySelectorAll('.content>*:not(.background),.navigation,.tagsList');
                  for (const item of items) {
                    item.style.opacity = '0';
                  }
                }, 0)
                const delay = ms => new Promise(res => setTimeout(res, ms));
                await delay(200);

              }} toggler={setShort} short={short} width={width} height={height} />}
              <Content projects={projects} setProjects={setProjects} width={width} height={height} />
            </div></>
        } />

        <Route path='/details' element={<>
          <NavBar projects={projects} setProjects={setProjects} showSearchbar={false} toggler={setShort} short={short} width={width} height={height} />
          {(!short || width > 800) && <SideBar toggler={setShort} short={short} width={width} height={height} />}
        </>
        } />

        <Route path='*' element={
          <>
            <About />
            <NavBar projects={projects} setProjects={setProjects} showSearchbar={false} toggler={setShort} short={short} width={width} height={height} />
            {(!short || width > 800) && <SideBar exitFun={async () => {
              setTimeout(() => {
                let items = document.querySelectorAll('.aboutMe *:not(.background)');
                for (const item of items) {
                  item.style.marginTop = '200%';
                  if (item.classList.contains('fa')) item.style.opacity = 0;
                }
              }, 0)
              const delay = ms => new Promise(res => setTimeout(res, ms));
              await delay(300);

            }} toggler={setShort} short={short} width={width} height={height} />}
          </>
        } />

      </Routes>
    </BrowserRouter >);
}

export default App;
