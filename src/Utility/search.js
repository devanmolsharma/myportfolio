let base;


function search(projects, keyword, changer) {
    if(!base)base = projects;
    let newProjects = [];
    for (const key in Object.keys(base)) {
        let element = base[key];
        console.log(JSON.stringify(element).indexOf(keyword));
        if (JSON.stringify(element).indexOf(keyword) != -1) {
            newProjects.push(element);
        }
    }

    changer(newProjects);
}


export default search;