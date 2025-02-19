import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import ProjectChallenge from "../components/ProjectChallenge";
import ProjectPadsquad from "../components/ProjectPadsquad";
import ProjectLogos from "../components/ProjectLogos";

const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Waiting for loader to animate. Loading complete when var is set to false.
    setTimeout(() => setIsLoading(false), 2200);
  }, []);

  return (
    <Router>
      <>
        {isLoading ? (
          <></>
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:login" element={<HomePage />} />
              <Route
                path="/project/challenges"
                element={<ProjectChallenge />}
              />
              <Route path="/project/padsquad" element={<ProjectPadsquad />} />
              <Route path="/project/logos" element={<ProjectLogos />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <ContactForm />
            <Footer />
          </>
        )}
      </>
    </Router>
  );
};

export default AppRouter;
