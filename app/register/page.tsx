"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    company: "",
    email: "",
    position: "",
    file: null, // New state for file
  });

  const [isCreating, setIsCreating] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];

    console.log(file.type);
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setFormData({
        ...formData,
        file: file,
      });
    } else {
      toast.error("Please upload a JPG or PNG file.", {
        position: "top-center",
      });
      setFormData({
        ...formData,
        file: null,
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsCreating(true);

    // Create a FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("file", formData.file!);
    formDataToSend.append("position", formData.position);
    // Assuming formData.file is the file input element

    try {
      // Send the FormData to the server
      await axios.post(
        "https://online-registration-backend.vercel.app/submit-form",
        formDataToSend
      );

      // Handle response
      // Check if response contains a PDF link
      toast.success("Please Check Your Inbox", {
        position: "top-center",
      });

      setIsCreating(false);
      setFormData({
        name: "",
        phoneNumber: "",
        company: "",
        email: "",
        position: "",
        file: null, // New state for file
      });
    } catch (error: any) {
      setIsCreating(false);
      toast.error(error.message);

      // Handle error
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <>
      <div className="font-[sans-serif] text-gray-800 bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4 mb-12">
        <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
          {/* <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
            <div>
              <h4 className="text-white text-lg font-semibold text-center">
                BAU Registration
              </h4>
              <p className="text-[13px] text-white mt-2 text-center">
                Welcome to our registration page! Get started by creating your
                account.
              </p>
            </div>
          </div> */}
          <form className="md:col-span-2 w-full py-6 px-6 sm:px-16">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-center">
                Immigrant Empowerment Conference Registration
              </h3>
            </div>
            <div className="space-y-5">
              <div>
                <label className="text-sm mb-2 block">Name</label>
                <div className="relative flex items-center">
                  <input
                    name="name"
                    type="text"
                    required
                    className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <label className="text-sm mb-2 block"> Upload Your Photo</label>

                <label htmlFor="file-input" className="sr-only">
                  Choose file
                </label>
                <div className="relative flex items-center">
                  <input
                    type="file"
                    name="file-input"
                    id="file-input"
                    className="block w-full border shadow-sm border-gray-300  rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:text-neutral-400
file:bg-gray-50 file:border-0
file:me-4
file:py-3 file:px-4
dark:file:text-neutral-400"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm mb-2 block">Phone Number</label>
                <div className="relative flex items-center">
                  <input
                    name="phoneNumber"
                    type="text"
                    required
                    className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 512 512"
                  >
                    <path d="M384 0H128C57.42 0 0 57.42 0 128v256c0 70.58 57.42 128 128 128h256c70.58 0 128-57.42 128-128V128c0-70.58-57.42-128-128-128zm96 384c0 53.02-42.98 96-96 96H128c-53.02 0-96-42.98-96-96V128c0-53.02 42.98-96 96-96h256c53.02 0 96 42.98 96 96z" />
                    <path d="M256 32c-105.87 0-192 86.13-192 192 0 105.87 86.13 192 192 192 105.87 0 192-86.13 192-192 0-105.87-86.13-192-192-192zm0 352c-88.366 0-160-71.634-160-160 0-88.366 71.634-160 160-160 88.366 0 160 71.634 160 160 0 88.366-71.634 160-160 160z" />
                    <path d="M256 96c-11.046 0-20 8.954-20 20v240c0 11.046 8.954 20 20 20s20-8.954 20-20V116c0-11.046-8.954-20-20-20z" />
                  </svg>
                </div>
              </div>
              <div>
                <label className="text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clip-path="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="md:flex md:flex-row gap-5 flex flex-col justify-between">
                <div>
                  <label className="text-sm mb-2 block">
                    Company / Organization
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="company"
                      type="email"
                      required
                      className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.84 0 0 114.84 0 256c0 141.16 114.84 256 256 256s256-114.84 256-256C512 114.84 397.16 0 256 0zm0 480C132.48 480 32 379.52 32 256c0-123.52 100.48-224 224-224s224 100.48 224 224c0 123.52-100.48 224-224 224z" />
                      <path d="M352 160c-8.832 0-16-7.168-16-16V64c0-8.832 7.168-16 16-16s16 7.168 16 16v80c0 8.832-7.168 16-16 16zm-96-96c0-8.832 7.168-16 16-16s16 7.168 16 16v80c0 8.832-7.168 16-16 16s-16-7.168-16-16V64zm48 224H176c-8.832 0-16-7.168-16-16s7.168-16 16-16h128c8.832 0 16 7.168 16 16s-7.168 16-16 16z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="text-sm mb-2 block">Position</label>
                  <div className="relative flex items-center">
                    <input
                      name="position"
                      type="email"
                      required
                      className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                      placeholder="Position"
                      value={formData.position}
                      onChange={handleInputChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 32C149.504 32 64 117.504 64 224c0 48.32 15.168 91.808 40.832 127.488C144.16 379.712 192 449.984 192 480c0 8.832 7.168 16 16 16s16-7.168 16-16c0-30.016 47.84-100.288 91.168-128.512C432.832 315.808 448 272.32 448 224 448 117.504 362.496 32 256 32zm0 352c-44.096 0-80-35.904-80-80 0-44.096 35.904-80 80-80s80 35.904 80 80c0 44.096-35.904 80-80 80zm0-144c-22.08 0-40 17.92-40 40s17.92 40 40 40 40-17.92 40-40-17.92-40-40-40z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="!mt-10">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
              >
                {isCreating ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div className="spinner-border text-white" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
