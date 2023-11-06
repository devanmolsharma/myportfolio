import { useEffect } from 'react';
import './About.css';
import { Link ,useNavigate} from 'react-router-dom';


function About() {
    let navigator = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            let items = document.querySelectorAll('.aboutMe *:not(.background)');
                for (const item of items) {
                    item.style.transition ='0.8s';
                    item.style.marginTop = '0%';
                    if (item.classList.contains('fa')) item.style.opacity = 1;
                }
            setTimeout(() => {
                
                document.getElementById("hi").classList.add("hover")
                setTimeout(() => { document.getElementById("fs").classList.add("hover") }, 1000)
                setTimeout(() => {
                    let items = document.getElementsByClassName("fa");
                    for (const item of items) {
                        item.classList.add("after");
    
                    }
                }, 2000)
            }, 500);
        }, 100);
    }, [])
    return <div className="aboutMe">
        <div id='hi' className='text'>I am Anmol</div>
        <div id="fs" className='text'>a Full Stack <br /><b>&lt; Web Developer&gt;</b></div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <a href="https://www.linkedin.com/in/dev-anmolsharma" class="fa fa-linkedin"></a>
        <a href="https://youtube.com/@keepupsharma" class="fa fa-youtube"></a>
        <a href="mailto:keepupsharma@gmail.com" class="fa fa-google"></a>
        {/* <div id='wd' className='text'>Web Developer <br/></div> */}
        <Link className='aboutMeLink' to="/aboutMe">About</Link>
        <Link className='projectLink' onClick={
            (e) => {
                e.preventDefault();
                let items = document.querySelectorAll('.aboutMe *:not(.background)');
                for (const item of items) {
                    item.style.marginTop = '200%';
                    item.style.backgroundPosition = 'right';
                    if (item.classList.contains('fa')) item.style.opacity = 0;
                }
                setTimeout(() => {
                    navigator("/projects");
                    
                }, 500);
            
        }} >Projects</Link>
        <div className="background"></div>
        <div className="foreground" />
    </div>
}

export default About;