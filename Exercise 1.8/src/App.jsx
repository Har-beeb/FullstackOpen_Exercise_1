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

const Statistics = (props) => {
  // ...
  const total = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / total
  const percentage = (props.good / total) * 100

  return (
    <>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {percentage} %</p>
    </>
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