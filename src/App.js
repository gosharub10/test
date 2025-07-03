import './App.css';

function App() {
  return (
    <div className="App">
      <p style={{fontSize: '6rem'}}>Иди нахуй</p>
      <video
        src="/cat.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '30%', height: 'auto' }}
      />
    </div>
  );
}

export default App;
