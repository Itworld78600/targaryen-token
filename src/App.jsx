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

function App() {
  const { account, chainId } = useContext(AppContext);
  const [openNetworkSwitch, setOpenNetworkSwitch] = useState(false);

  useEffect(() => {
    if (account && chainId > 0 && chainId !== 97) {
      setOpenNetworkSwitch(true);
    }
  }, [chainId, account]);
  return (
    <>
      <NetworkSwitch open={openNetworkSwitch} setOpen={setOpenNetworkSwitch} />
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
              <Partners />
              <TargaryenRoadmap />
              {/* <Faq /> */}
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
