import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>

)

const SetFeeds = ({text, value, setValue}) => {
  
  return (
    <Button onClick={() => setValue(value + 1)} text = {text} />
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )

}
const Statistics = ({good, neutral, bad}) => {
  // ...
  
  const total = good + neutral + bad
  const average = (good - bad) / total
  const percentage = ((good / total) * 100 + ' %')

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
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={total} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={percentage} />
        </tbody>
      </table>
    </div>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
  
      <SetFeeds value={good} setValue={setGood} text = {'good'} />
      <SetFeeds value={neutral} setValue={setNeutral} text = {'neutral'} />
      <SetFeeds value={bad} setValue={setBad} text = {'bad'} />

      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  )
}

export default App
