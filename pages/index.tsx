import type { NextPage } from "next";

import HomeTemplate from "@/components/templates/HomeTemplate";
import Footer from "@/components/molecules/Footer";

import Head from "@/components/config/Head";

const Home: NextPage = () => {
  return (
    <div className="font-serif">
      <Head />
      <HomeTemplate />
      <Footer />
    </div>
  );
};

export default Home;
