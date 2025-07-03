import './App.css';

function App() {
  return (
    <div className="App">
      <p style={{fontSize: '3rem'}}>саня лох</p>
      
      <img 
        src="/deenis.jpg"
        alt="Смешная картинка"
        style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
      />

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
