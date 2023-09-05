


function search(projects, keyword, changer) {
    let newProjects = [];
    console.log(projects);
    for (const key in Object.keys(projects)) {
        let element = projects[key];
        if (JSON.stringify(element).indexOf(keyword) != -1) {
            newProjects.push(element);
        }
    }

    changer(newProjects);
}


export default search;