import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './screens/Landing/Landing'

function App() {
  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('http://localhost:5000/test')
  //     .then(res => res.json())
  //     .then(data2 => {
  //       setData(data2);
  //       console.log(data2);
  //     });
  // }, []);

  // if (!data) {
  //   return <h3>Loading....</h3>;
  // }

  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <Landing></Landing>
    </div>
  );
}

export default App;
