import { useContext, useEffect, useState } from "react";
import Footer from "./components/Footer";
import NetworkSwitch from "./utils/NetworkSwitch";
import {
  HeroSection,
  AddressSection,
  Presale,
  Bloodline,
  Dragonomics,
  HowToBuy,
  Partners,
  Faq,
  TargaryenRoadmap,
} from "./pages";
import { AppContext } from "./utils/utils";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/SmallComponents/loading";

function App() {
  const { account, chainId } = useContext(AppContext);
  const [openNetworkSwitch, setOpenNetworkSwitch] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (account && chainId > 0 && chainId !== 56) {
      setOpenNetworkSwitch(true);
    }
  }, [chainId, account]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loading loading={loading} /> // Display loader while loading
      ) : (
        <>
          <NetworkSwitch
            open={openNetworkSwitch}
            setOpen={setOpenNetworkSwitch}
          />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AddressSection />
                  <Presale />
                  <Bloodline />
                  <Dragonomics />
                  <HowToBuy />
                  {/* <Partners /> */}
                  <TargaryenRoadmap />
                  {/* <Faq /> */}
                  <Footer />
                </>
              }
            />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
