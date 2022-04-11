import './App.css';
import Fondo from './components/Fondo'
import logoLevelUp from './images/logo.png';

const body = document.querySelector("body")

function App() {
  const cambiarColor = () => {
    var nombreColor = document.getElementById("nombreColor")

    const num = Math.floor(Math.random() * 16);
    let color = ['green', 'black', 'gray', 'red', 'olive','blue', 'yellow', 'maroon', 'cyan', 'wheat','aqua','orange', 'pink', 'white', 'fuchsia','teal'];
    // eslint-disable-next-line no-unused-expressions
    let colorEscogido = color[num];
    console.log(colorEscogido);
    body.style.backgroundColor = colorEscogido
    nombreColor.innerText = 'El nombre del color es:' + ' ' + colorEscogido;
    nombreColor.style.color = colorEscogido
  }
  return (
    
    <div className="App">
      
      <div className='logoLevelUp'>

        <img className='logo-levelUp' src={logoLevelUp} alt='Logo de level up' />
      </div>
      <div className='container'>

      <div className='container-num'>
      <div id="nombreColor">Nombre del color es: Aqua</div>
      <Fondo cambiarColorFondo={cambiarColor} text='Cambiar color'></Fondo>

      </div>
      </div>
    </div>
  );
}

export default App;
