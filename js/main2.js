let theinput = document.querySelector(".get-repos input")
let getButton = document.querySelector(".getbutton");
let reposData =document.querySelector('.show-data');

getButton.onclick = function () {
    getRepos()
}
function getRepos() {

    if(theinput.value == ""){
        reposData.innerHTML = '<span>Pleas Write Repo Name</span>'
    }else{

        fetch(`https://api.github.com/users/${theInput.value}/repos`)

        .then((response) => response.json())

        .then((repositories) => {

            reposData.innerHTML ='';

            repositories.forEach(repo => {
                
                let maindiv = document.createElement("div")

                let reponame = document.createTextNode(repo.name);

                maindiv.appendChild(reponame);

                let theurl = document.createElement('a');

                let texturl = document.createTextNode("Vist")

                theurl.appendChild(texturl);

                theurl.href = `https://github.com/${theInput.value}/${repo.name}`
                
                theurl.setAttribute('target', '_blank')

                maindiv.appendChild(theurl);

        // Create Stars Count Span
        let starsSpan = document.createElement("span");

        // Create The Stars Count Text
        let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

        // Add Stars Count Text To Stars Span
        starsSpan.appendChild(starsText);

        // Append Stars Count Span To Main Div
        maindiv.appendChild(starsSpan);

        // Add Class On Main Div
        maindiv.className = 'repo-box';

        // Append The Main Div To Container
        reposData.appendChild(maindiv);


            });
        })

    }
}