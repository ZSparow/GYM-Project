import database from 'mime-db';
import './App.css';
import CourseSection from './components/sections/CourseSection';
import NewUserSection from './components/sections/NewUserSection';
import UsersSection from './components/sections/UsersSection';


// const db = await createRxDatabase({
//   name: 'heroesdb',           // <- name
//   adapter: 'idb',          // <- storage-adapter
//   password: 'myPassword',     // <- password (optional)
//   multiInstance: true,         // <- multiInstance (optional, default: true)
//   eventReduce: false // <- eventReduce (optional, default: true)
// });
function App() {

  return (
    <div className="App">
      <img src="./hero.jpg" alt="" className="blur-background"></img>
      <CourseSection />
      <UsersSection />
      <NewUserSection />


    </div>
  );
}

export default App;
