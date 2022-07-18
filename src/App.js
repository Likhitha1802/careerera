
import './App.css';
import {
  BrowserRouter as Router,
  Switch,Route
} from "react-router-dom";
import Header from "./components/common/heading/Header"
import Home from "./components/common/home/Home"
import About from "./components/common/about/About"
import CourseHome from "./components/common/allcourses/CourseHome"
import Footer from "./components/common/footer/footer"
function App() {
  return (
    <>
 
      <Router>
      <Header/>
      <Switch>
          
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path='/' exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/courses" exact component={CourseHome}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App
