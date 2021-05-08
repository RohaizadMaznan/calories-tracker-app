import React from "react";
import Button from "./buttons/Button";
import InputField from "./inputs/InputField";

export default function CaloryForm() {
  return (
    <>
      <div className="w-full my-2">
        <div className="flex justify-center">
          <div>
            <form>
              <div className="flex flex-col w-full max-w-sm mx-auto p-4 border border-gray-200 bg-white shadow-md">
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="name"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    Meal
                  </label>

                  <div className="relative">
                    <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
                      <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>

                    <InputField
                      type="text"
                      id="meal"
                      name="meal"
                      placeholder="Meal"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="name"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    Calory
                  </label>

                  <div className="relative">
                    <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
                      <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                          />
                        </svg>
                      </div>
                    </div>

                    <InputField
                      type="text"
                      id="calory"
                      name="calory"
                      placeholder="Calory"
                    />
                  </div>
                  <div className="flex space-x-2 justify-between mt-4">
                    <Button type="button" name="Add New" color="green" width="full" />
                    <Button type="button" name="Delete All" color="red" width="full" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
