import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/home.jsx";
import Navbar from "./Compoment/navbar.jsx";
import Footer from "./Compoment/footer.jsx";
import Events from "./Pages/events.jsx";
import EventDescription from "./Pages/eventdiscription.jsx";
// import Preloader from "./Compoment/Preloader"; // <-- create this component
import Team from "./Pages/team.jsx";
import Gallery from "./Pages/gallery.jsx";
import Blogs from "./Pages/blogs.jsx";
import Blogsdescription from "./Pages/blogsdescription.jsx";
<<<<<<< HEAD
=======
import { ParallaxProvider } from "react-scroll-parallax";
// import Homepast from "./Pages/homepast.jsx";
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // simulate loading delay (or wait for API calls/images)
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // 2 sec preloader

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Preloader />; // show only preloader until ready
  // }

  return (
<<<<<<< HEAD
=======
    <ParallaxProvider>
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325
    <Router basename="/acmwebsite2025">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDescription />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blogsdescription />} />
      </Routes>
      <Footer />
    </Router>
<<<<<<< HEAD
=======
    </ParallaxProvider>
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325
  );
}

export default App;
