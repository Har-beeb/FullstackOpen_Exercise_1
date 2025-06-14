import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>

)

const SetFeeds = ({name, value, setValue}) => {
  
  return (
    <Button onClick={() => setValue(value + 1)} text = {name} />
  )
}

const Statistics = ({good, neutral, bad}) => {
  // ...
  
  const total = good + neutral + bad
  const average = (good - bad) / total
  const percentage = (good / total) * 100

  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given.</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {percentage} %</p>
    </div>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const increaseByOne = () => setGood(good + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <SetFeeds value={good} setValue={setGood} name = {'good'} />
      <SetFeeds value={neutral} setValue={setNeutral} name = {'neutral'} />
      <SetFeeds value={bad} setValue={setBad} name = {'bad'} />
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  )
}

export default App