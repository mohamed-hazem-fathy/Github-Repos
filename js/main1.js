 let theInput = document.querySelector(".get-repos input")
 let getButton = document.querySelector('.get-button')
 let datashow = document.querySelector('.show-data')

 getButton.onclick = function() {
    getRepos();
 }

 function getRepos(){

    if (theInput.value == ""){

        
        datashow.innerHTML = "<span>Pleas Write Github Username.</span>"


    }else{
        fetch(`https://api.github.com/users/${theInput.value}/repos`)

    .then((response) => response.json())

    .then((repostaries) => {

        datashow.innerHTML = "";


        repostaries.forEach(repo => {

            let mainDiv = document.createElement("div") ;
            
            let reposname = document.createTextNode(repo.name)
            
            mainDiv.appendChild(reposname)

            let theUrl = document.createElement('a')

            let urlText = document.createTextNode('Visit')

            theUrl.appendChild(urlText)

            theUrl.href =`https://github.com/${theInput.value}/${repo.name}`;

            theUrl.setAttribute('target', '_blank');

            mainDiv.appendChild(theUrl)

            let starsSpan = document.createElement("span");

            let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

            starsSpan.appendChild(starsText);

            mainDiv.appendChild(starsSpan);

            mainDiv.className = 'repo-box';



            datashow.appendChild(mainDiv)
        });



    })

    


        }
 }