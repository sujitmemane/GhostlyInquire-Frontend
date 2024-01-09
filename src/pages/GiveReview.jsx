import React from "react";
import Navbar from "../components/Navbar";
import { Textarea } from "@material-tailwind/react";

const GiveReview = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-8 md:mx-auto my-12  flex flex-col space-y-4">
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://media-bom2-1.cdn.whatsapp.net/v/t61.24694-24/403132760_1545597342941686_1466440014092959853_n.jpg?ccb=11-4&oh=01_AdTGeuGa_Jlqwvoys6qAwBzJ2syUCR-vWssiyfyDkJtmeg&oe=65AA2775&_nc_sid=e6ed6c&_nc_cat=105"
            className="w-40 h-40 rounded-full"
          />
          <h1>Sujit Memane</h1>
        </div>
        <Textarea label="Type Anonymous Message" />
        <button className="inline-flex w-full items-center justify-center rounded bg-black px-3.5 py-2.5 font-extrathin leading-7 text-white hover:bg-black/80">
          SEND
        </button>
      </div>
    </div>
  );
};

export default GiveReview;
