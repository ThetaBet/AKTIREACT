import React from 'react';
import Calculator from './components/calculator';
import FuncCalculator from './components/funcCalculator';

function App() {

  const [visible, setVisible] = React.useState(false)

  return (
    <div className="App">
      <Calculator/>
      {visible && <FuncCalculator/>}
    </div>
  );
}

export default App;
