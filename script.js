let homePoints = 0
document.getElementById('homePoints').textContent = homePoints
let awayPoints = 0
document.getElementById('awayPoints').textContent = awayPoints


function pointsHome(point) {
    homePoints = homePoints + point
    document.getElementById('homePoints').textContent = homePoints
}

function pointsAway(point) {
    awayPoints = awayPoints + point
    document.getElementById('awayPoints').textContent = awayPoints
}