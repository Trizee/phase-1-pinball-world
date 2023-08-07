fetch('http://localhost:3000/games')
.then(r => r.json())
.then(data => {
    let gameData = data
    console.log(gameData)
    gameData.forEach(fillList)
    fillDetail(gameData[0])
})
highScore()

function fillList(gameData){
    const list = document.createElement('h5')
    list.textContent = gameData.name
    const gameList = document.querySelector('.game-list')
    gameList.appendChild(list)

    list.addEventListener('click',()=>{
        fillDetail(gameData)
    })
}
let currentGame
function fillDetail(gameData){
    currentGame = gameData
    const img = document.querySelector('#detail-image')
    const title = document.querySelector('#detail-title')
    const score = document.querySelector('#detail-high-score')

    img.src = gameData.image
    title.textContent = gameData.name
    score.textContent = gameData.high_score
}

function highScore(){
    let submit = document.querySelector('#high-score-form')
    submit.addEventListener('submit',(e)=>{
        e.preventDefault()

        currentGame.high_score = e.target['score-input'].value

        fillDetail(currentGame)

        submit.reset()
    })
}