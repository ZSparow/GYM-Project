import './App.css';
import CourseSection from './components/pages/CourseSection';
import NewUserSection from './components/pages/NewUserSection';
import UsersSection from './components/pages/UsersSection';

function App() {
  return (
    <div className="App">
      <div className="blur-background"></div>
      <CourseSection />

      <NewUserSection />
      <UsersSection />


    </div>
  );
}

export default App;
