$(document).ready(function(){    
    $("#icon").hover(function(){
        $("#icon").mouseenter(function(){
            $(this).css("font-size", "90px");
        });
            $("#icon").mouseleave(function(){
            $(this).css("font-size", "");
        });
        
    });
});
$(document).ready(function(){    
    $("#icon2").hover(function(){
        $("#icon2").mouseenter(function(){
            $(this).css("font-size", "90px");
        });
            $("#icon2").mouseleave(function(){
            $(this).css("font-size", "");
        });
        
    });
});
$(document).ready(function(){    
    $("#icon3").hover(function(){
        $("#icon3").mouseenter(function(){
            $(this).css("font-size", "90px");
        });
            $("#icon3").mouseleave(function(){
            $(this).css("font-size", "");
        });
        
    });
});

function loadRepo(url, callback) {
    const gitHubRequest = new XMLHttpRequest();

    gitHubRequest.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            loadRepoCallback(JSON.parse(this.responseText))
        }
    };
    gitHubRequest.open('GET', 'https://api.github.com/users/ajpuchalski/repos', true);
    gitHubRequest.send();
}

function loadRepoCallback(repos) {
    let container = document.getElementById('gitProject');
 let output = []
    repos.forEach(function(repo) {

   output.push(`<li>${repo.name} <a href="${repo.html_url}"></li>`);
 })
 container.innerHTML = output.join('');
}

