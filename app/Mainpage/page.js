"use client";
import React, { useState } from "react";
import "primeicons/primeicons.css";
import NavBar from "../component/navbar/page";
import Footer from "../component/footer/page";
import Link from "next/link";

let recipesDetailsArray;

export async function fetchData(recName) {
  console.log("fetchData Called with keyword: ", recName);
  let data = await fetch("http://localhost:3000/api/fetchData", {
    method: "POST",
    body: JSON.stringify({
      recName,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  let returnedData = await data.json();
  console.log("Returned Data: ", returnedData);
  return {
    returnedData,
  };
}

const UserPage = () => {
  const [recipeName, setRecipeName] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [clearBtn, setClearBtn] = useState(false);
  const [alertText, setAlertText] = useState("");

  return (
    <>
      <NavBar />
      <div
        className="flex flex-col justify-center items-start h-full py-[240px] w-full text-white"
        style={{
          backgroundImage:
            "url(https://images3.alphacoders.com/109/1097928.jpg)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center gap-4 w-full pl-5 md:px-10">
          <h1 className="md:text-6xl text-3xl text-shadow-xs text-shadow-black capitalize font-semibold md:pr-[50%] pr-[20%]">
            Create Delicious recipes in seconds!
          </h1>
          <p>
            Enter the recipe name and let our app create the perfect recipe for
            you.
          </p>
        </div>
        <div className="flex flex-row justify-center self-start ml-5 md:ml-10 h-auto mt-6 text-md md:text-xl bg-transparent w-[90%] backdrop-blur-xs md:w-[40%] outline-none border-2 border-neutral-600 rounded-lg">
          <input
            id="inputField"
            onChange={(e) => setRecipeName(e.target.value)}
            type="text"
            placeholder="Enter The Recipe Name"
            className="z-0 bg-transparent capitalize outline-none p-1 md:p-2 m-2 rounded-lg w-full"
          ></input>
          {clearBtn && (
            <i
              onClick={() => {
                setClearBtn(!clearBtn);
                setRecipeName("");
                setShowDetails(!showDetails);
                document.getElementById("inputField").value = "";
                setAlertText("");
              }}
              className="pi pi-times text-lg md:text-2xl mr-4 m-auto text-white cursor-pointer hover:text-red-700 duration-500 ease-in-out"
            ></i>
          )}
          <i
            onClick={async () => {
              if (recipeName.length < 1) {
                setAlertText("Please fill the input field first...");
              } else {
                setAlertText("Please wait to get you data...");
                let returnedResponseData = await fetchData(recipeName);

                if (returnedResponseData.returnedData.meals) {
                  recipesDetailsArray = Object.values(
                    returnedResponseData?.returnedData?.meals
                  );

                  setAlertText("Scroll down to see the recipes...");
                  setClearBtn(!clearBtn);
                  setShowDetails(!showDetails);
                } else {
                  setAlertText("No data found with this keyword...");
                  setClearBtn(!clearBtn);
                }
              }
            }}
            className="pi pi-search text-2xl mr-4 m-auto text-white cursor-pointer active:text-yellow-600 hover:text-yellow-600 hover:text-3xl duration-500 ease-in-out"
          ></i>
        </div>
        <p className="text-md md:text-lg text-center mt-2 w-[80%] md:w-[40%] ml-10">
          {alertText}
          <span className="text-transparent">.</span>
        </p>
      </div>

      <>
        <div className="flex flex-col justify-center h-full w-full bg-black text-white">
          {showDetails && (
            <>
              {recipesDetailsArray.map((meal, index) => (
                <div
                  className="flex flex-row justify-center items-center gap-5 px-5 md:px-10 w-full md:w-[90%] h-[98%] py-10"
                  key={index}
                >
                  <div className="flex flex-col gap-2 px-8 h-full">
                    <h1 className="text-2xl md:text-3xl font-semibold">
                      {"-> "} {meal.strMeal}
                    </h1>
                    <p className="text-base md:text-base">
                      <Link href={`${meal.strYoutube}`}>
                        YT:{" "}
                        <span className="text-blue-600 cursor-pointer active:underline hover:underline">
                          {meal.strYoutube}
                        </span>
                      </Link>
                    </p>
                    <div className="flex flex-col md:flex-row justify-between overflow-y-auto md:gap-0 gap-5">
                      {/* Ingredients */}
                      <div className="w-full md:w-1/2">
                        <h2 className="text-2xl">Ingredients</h2>
                        <ul className="list-disc ml-6">
                          {Array.from({ length: 20 }, (_, i) => i + 1).map(
                            (i) => {
                              const ingredient = meal[`strIngredient${i}`];
                              const measure = meal[`strMeasure${i}`];
                              return ingredient ? (
                                <li key={i}>
                                  {measure} {ingredient}
                                </li>
                              ) : null;
                            }
                          )}
                        </ul>
                      </div>

                      {/* Instructions */}
                      <div className="w-full">
                        <h2 className="text-2xl">Instructions</h2>
                        <p>{meal.strInstructions}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </>

      <Footer />
    </>
  );
};

export default UserPage;

// How can we implement the api data in jsx ???
