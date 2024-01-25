
import CoreConcepts from "./components/CoreConepets";
import Examples from "./components/Examples";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept"
const obj = {name : 'hemchand'} // it will also work

function App() {
  return (
    <div>
      {/* <header><h1>Hello Hemchand</h1></header>  */} {
        // the scope of Header inside the component is not limited to that components folder only. you can see that the above header tag is also inheriting that properties. whether you import the Header.css or not.
      }
      <Header/>
      <main>
        <h2>Time to get started! {obj.name}</h2>
        <CoreConcepts CoreConcept={CoreConcept}/>
      </main>
      <Examples/>
    </div>
  );


}

export default App;
