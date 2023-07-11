let input = document.querySelector(".input-field"),
    button = document.querySelector(".button"),
    div = document.querySelector(".main-div");

button.onclick = function()
{
    if ( input.value == "" ){
        div.innerHTML = "Plese Input Some Data";
    }else{
        fetch(`https://api.github.com/users/Elzerowebschool/repos`)
        .then((response) => response.json())
        .then(datas => {
            datas.forEach(data => {
                div.innerHTML = "";
                var repodiv = document.createElement('div');
                repodiv.classList.add('des');
                var reponame = document.createTextNode(data.name);
                repodiv.appendChild(reponame);
                div.appendChild(repodiv);
                var repospan = document.createElement("span");
                var repostar = document.createTextNode(`Stars ${data.stargazers_count}`);
                repospan.appendChild(repostar);
                repodiv.appendChild(repospan);
                var reponode = document.createElement("a");
                var repotxt = document.createTextNode('visit');
                reponode.href = `https://github.com/elzerowebschool/${data.name}`;
                reponode.setAttribute('target' , "_blank");
                reponode.appendChild(repotxt);
                repodiv.appendChild(reponode);
            });
        });
    }
}