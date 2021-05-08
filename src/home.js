import React from "react";
import Button from "./components/buttons/Button";
import CaloryForm from "./components/CaloryForm";
import CaloryTracker from "./components/CaloryTracker";
import Header from "./components/Header";

function Home() {
  return (
    <>
      <Header />
      <CaloryTracker />
      <CaloryForm />

      <div className="block w-5/12 mx-auto mt-10 space-y-4">
        <div className="container w-full bg-gray-100 rounded-lg shadow-sm px-4 py-2 my-2">
          <div className="flex justify-between">
            <p className="text-xl mt-1">Dessert: 100 calories</p>
            <Button type="button" name="Delete" color="red" width="20" />
          </div>
        </div>
        <div className="container w-ful bg-gray-100 rounded-lg shadow-sm px-4 py-2 my-2">
          <div className="flex justify-between">
            <p className="text-xl mt-1">Dessert: 100 calories</p>
            <Button type="button" name="Delete" color="red" width="20" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
