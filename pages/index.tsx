import type { NextPage } from "next";
import Image from "next/image";

import HomeTemplate from "@/components/templates/HomeTemplate";

import Head from "@/components/config/Head";

const Home: NextPage = () => {
  return (
    <div className="font-serif">
      <Head />

      <HomeTemplate />

      <footer className="text-center py-8">
        <span>Made with ❤️ by</span>
        <a
          href="https://github.com/marcostl2"
          className="text-grey font-bold ml-1"
        >
          Marcos D. Silva
        </a>
      </footer>
    </div>
  );
};

export default Home;
