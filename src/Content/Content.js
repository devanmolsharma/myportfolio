import { useState } from 'react';
import ProjectDialog from '../Dialogs/ProjectDialog';
import './Content.css';
import TagsList from './TagsList';
import VideoBox from './VideoBox';


function Content(params) {
    const [projectId, setId] = useState(null);
    const count = params.width < 800 ? 1 : (params.width > 1150 ? 3 : 2);
    const tags = ['All', 'HTML and JS', 'React js', 'Python', 'Flutter (android)', 'Artificial Intelligence', 'Mini Projects'];
    var projectElements = [];

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
        fetch("https://troubled-series.000webhostapp.com/increaseViewCount.php?id="+copy[id].primary);
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
            // Assuming 'body' contains the data you want to send as query parameters
            id = copy[id].primary;
            name = encodeURIComponent(name);
            comment = encodeURIComponent(comment);

            const url = `https://troubled-series.000webhostapp.com/addComment.php?id=${id}&name=${name}&comment=${comment}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data); // Handle the response data here
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

        {projectId && <ProjectDialog project={params.projects[projectId]} id={projectId} onExit={onExit} handleComment={handleComment} />}
        <TagsList onSelected={() => { }} tags={tags} />
        <div className='content' style={{ height: params.height * 0.9 + "px", gridTemplateColumns: "1fr ".repeat(count), ...params.style ?? {} }}>
            {projectElements}
        </div>


    </main>)
}

export default Content;