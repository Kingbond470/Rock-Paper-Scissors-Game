const selectionButtons=document.querySelectorAll('[data-selection]')  // Get the name of the button clicked by user
const finalColumn=document.querySelector('[data-final-column]')
const computerScoreSpan=document.querySelector('[data-computer-score]')
const yourScoreSpan=document.querySelector('[data-your-score]')

const SELECTIONS = [  					//Global var,array of all possible selection
	{
		name: 'rock',
		emoji: '✊',
		beats: 'scissors'
	},
	{
		name: 'paper',
		emoji: '✋',
		beats: 'rock'
	},
	{
		name: 'scissors',
		emoji: '✌️',
		beats: 'paper'
	}
]

selectionButtons.forEach(selectionButton => { // For each button diffrent seleciton code
	selectionButton.addEventListener('click', e => { 		
		const selectionName=selectionButton.dataset.selection //selectionButton will give the name of selected button
		const selection=SELECTIONS.find(selection => selection.name===selectionName)           // Find from selection,which one share the same name
		makeSelection(selection)
	})
})

function makeSelection(selection){
	const computerSelection=randomSelection()
	const yourWinner=isWinner(selection,computerSelection)
	const computerWinner=isWinner(computerSelection,selection)
	
	
	addSelectionResult(computerSelection,computerWinner)
	addSelectionResult(selection,yourWinner)
	if(yourWinner) incrementScore(yourScoreSpan)
	if(computerWinner) incrementScore(computerScoreSpan)
	console.log(selection)
	console.log(computerSelection)
	}

function addSelectionResult(selection,winner){              // In order to put our selection after computer text,function is defined.
	const div=document.createElement('div')
	div.innerText=selection.emoji
	div.classList.add('result-selection')
	if(winner) div.classList.add('winner')
	finalColumn.after(div)

}
function isWinner(selection,opponentSelection){
	return selection.beats===opponentSelection.name
}
function randomSelection(){ 										//Random selection from computer and It will get a index from array 0-1
	const randomIndex=Math.floor(Math.random()*SELECTIONS.length)	// Random no from 0 to length(0-3), it can give max 2.9999 Math.floor() --> (0,1,2)/3index
	return SELECTIONS[randomIndex]
}
function incrementScore(scoreSpan){
	scoreSpan.innerText=parseInt(scoreSpan.innerText)+1
}




