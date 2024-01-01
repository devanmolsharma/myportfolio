let base;


function search(projects, keyword, changer) {
    if (!base) base = projects;
    if (keyword == 'All') keyword = '';
    let newProjects = [];
    for (const key in Object.keys(base)) {
        let element = base[key];
        if (JSON.stringify(element).toLowerCase().indexOf(keyword.toLowerCase()) != -1) {
            newProjects.push(element);
        }
    }

    changer(newProjects);
}


export default search;