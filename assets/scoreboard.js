var leaderBoard = document.getElementById('leader-board');
var leaderList = document.getElementById('leaders');

var startoverButton = document.getElementById('start-over');
var clearButton = document.getElementById('clearBoard');
var noScoreWarning = document.getElementById('noscore-warning')


function initScoreBoard(){
    scores = JSON.parse(localStorage.getItem('scores'))
    noScoreWarning.setAttribute('style','display:none')
    if (scores === null) {
        scores = [];
        leaderBoard.setAttribute('style','display:none')
        noScoreWarning.setAttribute('style','display:block')
    }
    for(var i =0;i<scores.length;i++){
        var tr = document.createElement('tr')
        tr.setAttribute('class','table-primary')
        
        var th = document.createElement('th')
        th.textContent=i+1

        var tdUser = document.createElement('td')
        tdUser.textContent=scores[i].userName

        var tdScore = document.createElement('td')
        tdScore.textContent=scores[i].score

        leaderList.appendChild(tr)
        tr.appendChild(th)
        tr.appendChild(tdUser)
        tr.appendChild(tdScore)

        // th.textContent = scores[i].userName + " with a score of " + scores[i].score
        // leaderList.appendChild(li)
    }
}

function startover(){
    window.location.href = "./index.html";
}

function clearScoreBoard(){
    localStorage.clear();  
    while (leaderBoard.firstChild) {
        leaderBoard.removeChild(leaderBoard.lastChild);
    }
}

initScoreBoard();

startoverButton.addEventListener('click',startover);
clearButton.addEventListener('click',clearScoreBoard);