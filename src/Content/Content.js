import { useEffect, useState } from 'react';
import ProjectDialog from '../Dialogs/ProjectDialog';
import './Content.css';
import TagsList from './TagsList';
import VideoBox from './VideoBox';
import search from "../Utility/search";
let projectCopy = [];


function Content(params) {
    const [projectId, setId] = useState(null);
    const count = params.width < 800 ? 1 : (params.width > 1150 ? 3 : 2);
    let tags = ['All'];
    if((projectCopy.length < 1)){
        projectCopy = params.projects;
    }
    for (let i = 0; i < Object.keys(projectCopy).length; i++) {
        let element = projectCopy[`${i}`];
        tags.push(...element.thingsLearnt)
    }
    tags = new Array(...new Set(tags));
    var projectElements = [];

    function handleScroll() {
        if (window.screen.width < 500) {
        const children = document.getElementsByClassName('scrollport')[0].children;
        const screenWidth = window.visualViewport.width;
        for (let i = 0; i < children.length; i++) {
            const box = children[i].getBoundingClientRect();
            const x = box.x;
            const width = box.width;

            if ((x < (screenWidth / 2) && (x + width) > (screenWidth / 2)) && (i > (children.length / 2))) {
                document.getElementById('animation3').checked = true;
            }
            else if((x < (screenWidth / 2) && (x + width) > (screenWidth / 2))) {
                document.getElementById('animation3').checked = false;

            }
            children[i].classList.toggle('active', (x < (screenWidth / 2) && (x + width) > (screenWidth / 2)));


            }
        }
    }
    useEffect(() => {
        handleScroll();
    }, [params.projects])

    function showDetails(id) {
        setId(id);
    }

    function onExit() {
        setId(null);
    }

    function handleVideoClick(id) {
        let copy = JSON.parse(JSON.stringify(params.projects));
        copy[id]["views"] += 1;
        showDetails(id);
        params.setProjects(copy);
        fetch("https://troubled-series.000webhostapp.com/increaseViewCount.php?id=" + copy[id].primary);
    }

    function handleComment(id, name, comment) {
        if (name && comment) {
            let copy = JSON.parse(JSON.stringify(params.projects));
            copy[id]["comments"].push({
                "date": '2023-10-03 17:21:11',
                "name": name,
                "comment": comment
            });
            params.setProjects(copy);
            id = copy[id].primary;
            name = encodeURIComponent(name);
            comment = encodeURIComponent(comment);

            const url = `https://troubled-series.000webhostapp.com/addComment.php?id=${id}&name=${name}&comment=${comment}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data); 
                })
                .catch(error => {
                    console.error('Error:', error);
                });

            // params.projects[id].primary
        }

    }

    for (let i = 0; i < Object.keys(params.projects).length; i++) {
        let element = params.projects[`${i}`];
        projectElements.push(<VideoBox thumbnailUrl={element['thumbnailUrl']} title={element['title']} channel={element['channel']}
            views={element['views']} uploadDate={element['uploadDate']} url={element['url']} id={Object.keys(params.projects)[i]} handleVideoClick={handleVideoClick} />)
    }


    return (<main className='allBody'>
        <div id='proBg' className="background"></div>
        {projectId && <ProjectDialog project={params.projects[projectId]} id={projectId} onExit={onExit} handleComment={handleComment} />}
        {params.width > 1150 && <TagsList onSelected={() => { }} tags={tags} projects = {params.projects} changer = {params.setProjects} search = {search}/>}

        <div className='content scrollport' onScroll={handleScroll} style={{ height: params.height * 0.9 + "px", gridTemplateColumns: "1fr ".repeat(count), ...params.style ?? {} }}>
            <div></div>
            {projectElements}
            <div></div>
        </div>
        <input type="checkbox" id="animation3" onChange={(e) => {
            let nestedElement = document.getElementsByClassName('scrollport')[0];
            if (e.target.checked) {
                nestedElement.scrollBy({
                    left: nestedElement.scrollWidth,
                    behavior: 'smooth'
                });
            } else {
                nestedElement.scrollBy({
                    left: -nestedElement.scrollWidth,
                    behavior: 'smooth'
                });
            }

        }} />
        <label for="animation3">
            <div class="arrow"></div>
        </label>


    </main>)
}

export default Content;