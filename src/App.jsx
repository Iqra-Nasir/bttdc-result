import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/shared/Footer";
import Nav from "./components/shared/Nav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import Loader from "./components/shared/Loader";
import { getDuration, getShift, organizationFetch } from "./store/store";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    organizationFetch();
    getDuration();
    getShift();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if(isLoading) return <Loader/>
 
  return (
    <div className="bg-[#F8F8FF]">
      <QueryClientProvider client={queryClient}>
        <Nav />
        <div>
          <ScrollToTop />
          <Outlet />
        </div>
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default App;
