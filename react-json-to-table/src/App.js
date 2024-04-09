import Table from './Table';
import data from "./data.json"
import './styles.css';

function App() {
  const getHeadings = () => {
    return Object.keys(data[0]);
  }

  return (
    
    <div className="container">
      <h1>Generate a Table From JSON Data in React</h1>
      <br></br>
      <Table theadData={getHeadings()} tbodyData={data}/>
    </div>
  );
}
export default App;