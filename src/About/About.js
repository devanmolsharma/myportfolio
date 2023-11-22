import { useEffect } from 'react';
import './About.css';
import { Link, useNavigate } from 'react-router-dom';

function About() {
    let navigator = useNavigate();
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    function handleScroll(e) {
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


    }

    useEffect(() => {
        setTimeout(() => {
            let items = document.querySelectorAll('.aboutMe *:not(.background)');
            for (const item of items) {
                item.style.transition = '0.8s';
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
        <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'></link>
        <div id='hi' className='text'>Hi, I'm</div>
        <div id="fs" className='text'><b>
            <div className="frame">
                <div className="center">
                    <div className="carousel fs">
                        <div className="pre"></div>
                        <div className="change_outer">
                            <div className="change_inner">
                                <div className="element">🕸️<i>&lt;web developer&gt;</i></div>
                                <div className="element">📱<i>&lt;android developer&gt;</i></div>
                                <div className="element">📚<i>&lt;continuous learner&gt;</i></div>
                                <div className="element">🖥️<i>&lt;full-stack developer&gt;</i></div>
                                <div className="element">🤖<i>&lt;AI enthusiast&gt;</i></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div></b></div>

        <a href="https://www.linkedin.com/in/dev-anmolsharma" class="fa fa-linkedin"></a>
        <a href="https://youtube.com/@keepupsharma" class="fa fa-youtube"></a>
        <a href="mailto:keepupsharma@gmail.com" class="fa fa-google"></a>


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