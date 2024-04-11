import { useState, useEffect } from "react"
import "./Game.css"

function Game() {
  const [userChoice, setUserChoice] = useState("rock")
  const [computerChoice, setComputerChoice] = useState("rock")
  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [result, setResult] = useState("")

  const choices = ["rock", "paper", "scissors", "lizard", "spock"]

  const handleOnClick = (value) => {
    setUserChoice(value)
    computerChoiceGenerated()
  }

  const computerChoiceGenerated = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "scissors" && computerChoice === "lizard") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "paper" && computerChoice === "spock") ||
        (userChoice === "rock" && computerChoice === "lizard") ||
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "lizard" && computerChoice === "spock") ||
        (userChoice === "lizard" && computerChoice === "paper") ||
        (userChoice === "spock" && computerChoice === "scissors") ||
        (userChoice === "spock" && computerChoice === "rock")
      ) {
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setResult("Yeyyy, you win this point!")
        if (updatedUserPoints === 5) {
          const over = true
          setGameOver(over)
          setResult("Well done! You win!")
        }
      }
    }
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        (computerChoice === "scissors" && userChoice === "paper") ||
        (computerChoice === "scissors" && userChoice === "lizard") ||
        (computerChoice === "paper" && userChoice === "rock") ||
        (computerChoice === "paper" && userChoice === "spock") ||
        (computerChoice === "rock" && userChoice === "lizard") ||
        (computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "lizard" && userChoice === "spock") ||
        (computerChoice === "lizard" && userChoice === "paper") ||
        (computerChoice === "spock" && userChoice === "scissors") ||
        (computerChoice === "spock" && userChoice === "rock")
      ) {
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setResult("Nooo, the computer wins this point")
        if (updatedComputerPoints === 5) {
          const over = true
          setGameOver(over)
          setResult("Nooo, computer wins!")
        }
      }
    }
    if (computerChoice === userChoice) {
      setResult("Nooo")
    }
  }, [computerChoice, userChoice])

  return (
    <div className="game">
      <h1>Rock, Paper, Scissors, Lizard, Spock</h1>
      <div className="score">
        <h2>
          Points: {userPoints} - {computerPoints}
        </h2>
      </div>
      <div className="choices">
        <div>
          <img src={`./images/${userChoice}.png`} alt="user-choice" />
        </div>
        <div>
          <img src={`./images/${computerChoice}.png`} alt="computer-choice" />
        </div>
      </div>
      <div className="button-div">
        {!gameOver &&
          choices.map((choice, index) => (
            <button
              className="button"
              key={index}
              onClick={() => handleOnClick(choice)}
            >
              {choice}
            </button>
          ))}
        {gameOver && (
          <button className="button" onClick={() => reset()}>
            Let's play again
          </button>
        )}
        <h2>{result}</h2>
      </div>
    </div>
  )
}

export default Game
