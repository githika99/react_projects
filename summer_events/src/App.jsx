import './App.css'
import Grid from './components/Grid';

function App() {
  return (
    <div className = "App">
      <img class = 'beach_ball' src = 'src/assets/beach_ball.jpeg'></img>
      <img class = 'palm_tree' src = 'src/assets/palmtree.jpeg'></img>
      <h1>Summer Events in the Bay Area</h1>
      <h3>A list of free, outdoor events happening in the San Francisco Bay Area in Summer 2024!</h3>
      <Grid> </Grid>
    </div>
  )
}

export default App
