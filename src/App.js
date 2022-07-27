import './App.css';
import Header from './componentes/header.jsx';
import Main from './componentes/main.jsx';
import Footer from './componentes/footer.jsx';
import Grid from './componentes/grid.jsx';

function App (){

//   render(){
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Grid/>
      <Footer/>
    </div>
  );
}


export default App;
