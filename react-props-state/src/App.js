import React from 'react';
import Wrapper from './components/Wrapper';

function App() {

  const [visible, setVisible] = React.useState(false)

  return (
    <div className="App">
      <Wrapper></Wrapper>
    </div>
  );
}

export default App;
