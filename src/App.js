import './App.css';
import Hoc from './Components/Hoc';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
    <h1>Higher-Order Components</h1>
    <strong>1)Higher-order components or HOC is the advanced method of reusing the component functionality logic. <br/> 2)It simply takes the original component and returns the enhanced component.</strong>

<pre>
Syntax:

const EnhancedComponent = higherOrderComponent(OriginalComponent);
</pre>
<h3>Reason To Use Higher-Order component:</h3>
<ul>
  <li>Easy to handle</li>
  <li>Get rid of copying the same logic in every component
</li>
  <li>Makes code more readable
</li>
</ul>
       <Hoc/>
       <ProductList/>
    </div>
  );
}

export default App;
