/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  // FormEvent,
  MouseEvent,
} from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaLocationArrow } from "react-icons/fa";
// import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  company: string;
  project: string;
  service: string;
  budget: string;
}

const Contact: React.FC = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    project: "",
    service: "",
    budget: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   setShowModal(true);

  //   const serviceId = "service_m00478j";
  //   const templateId = "template_99kd9sf";
  //   const userId = "MuE3RTwNiKXKrPVEG";

  //   const templateParams = {
  //     from_name: formData.name,
  //     to_email: "dyserfcareer@gmail.com",
  //     to_name: "DLAB",
  //     company: formData.company,
  //     email: formData.email,
  //     service: formData.service,
  //     budget: formData.budget,
  //     project: formData.project,
  //   };

  //   console.log("templateParams:", templateParams);

  //   emailjs
  //     .send(serviceId, templateId, templateParams, userId)
  //     .then((response) => {
  //       console.log("Email sent successfully:", response);
  //       resetForm();
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });
  // };

  // const resetForm = (): void => {
  //   setFormData({
  //     name: "",
  //     email: "",
  //     company: "",
  //     project: "",
  //     service: "",
  //     budget: "",
  //   });
  // };

  const closeModal = (): void => {
    setShowModal(false);
  };

  const handleClickOutside = (e: MouseEvent<Document>): void => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside as any);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside as any);
    };
  }, []);

  return (
    <div className="bg-[#F2F2F2] w-full py-[2rem] ">
      <div className="max-w-[1200px] px-2 mx-auto py-10">
        <div className="px-[1rem] py-3 md:py-10">
          <h3
            data-aos="fade-up-right"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="text-[#8D1DE5] text-[12px] md:[14px] lg:text-[24px]"
          >
            Share your project idea with us
          </h3>
          <h1
            data-aos="fade-up-right"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="font-orbitron tracking-wider text-black text-[24px] md:text-[36px] lg:text-[48px]"
          >
            Let’s work together..
          </h1>
        </div>
        <div className="max-w-md w-full px-4 mx-auto md:max-w-3xl lg:ml-auto lg:mr-0">
          <form
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="700"
            // onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            {/* Name */}
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 py-1 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none"
                required
              />
            </div>

            {/* Company and Email */}
            <div className="flex flex-col items-start space-x-0 md:flex-row md:items-center md:space-x-6">
              <div className="w-full md:w-auto">
                <label
                  htmlFor="company"
                  className="block text-sm mt-5 font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 py-1 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none px-[6rem]"
                  required
                />
              </div>

              <div className="w-full md:w-auto">
                <label
                  htmlFor="email"
                  className="block text-sm mt-5 font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 py-1 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none px-[6rem]"
                  required
                />
              </div>
            </div>

            {/* Service and Budget */}
            <div className="flex flex-col space-x-0 md:flex-row md:space-x-6">
              <div className="mt-5 md:mt-0 w-full md:w-auto">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service required <span className="text-[#8D1DE5]">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 py-2 w-full border-b-2 text-[#828282] text-sm md:text-sm font-poppins border-gray-300 bg-transparent focus:outline-none md:px-[6.5rem]"
                  required
                >
                  <option
                    value=""
                    disabled
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    Select from options
                  </option>
                  <option
                    value="Product UIUX Design"
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    Product UIUX Design
                  </option>
                  <option
                    value="Brand Identity Design"
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    Brand Identity Design
                  </option>
                  <option
                    value="Web Development"
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    Web Development
                  </option>
                  <option
                    value="MVP Development"
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    MVP Development
                  </option>
                  <option
                    value="UX Auditing"
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    UX Auditing
                  </option>
                  <option
                    value="others"
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    Others
                  </option>
                </select>
              </div>

              <div className="mt-7 md:mt-0 w-full md:w-auto">
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project budget <span className="text-[#8D1DE5]">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-1 py-2 w-full border-b-2 text-[#828282] text-sm md:text-sm font-poppins border-gray-300 bg-transparent focus:outline-none md:px-[6.5rem]"
                  required
                >
                  <option
                    value=""
                    disabled
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    Range from options
                  </option>
                  <option
                    value="$1k - $2.5k"
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    $1k - $2.5k
                  </option>
                  <option
                    value="$2.5k - $5k"
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    $2.5k - $5k
                  </option>
                  <option
                    value="$5k - $10k"
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    $5k - $10k
                  </option>
                  <option
                    value="$10k - $20k"
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    $10k - $20k
                  </option>
                  <option
                    value="$20k - $50k"
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    $20k - $50k
                  </option>
                  <option
                    value="$50k - $100k"
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    $50k - $100k
                  </option>
                  <option
                    value="$100k+"
                    className="text-[#828282] text-sm md:text-sm font-poppins"
                  >
                    $100k+
                  </option>
                </select>
              </div>
            </div>

            {/* Project */}
            <div className="mb-2">
              <label
                htmlFor="project"
                className="block text-sm font-medium text-gray-700 mt-5"
              >
                Project Description
              </label>
              <input
                type="text"
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="mt-1 py-1 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none"
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="inline-flex items-center mt-10 rounded-full bg-[#8D1DE5] py-3 px-8 text-sm font-medium text-white hover:bg-[#7b17d7]"
            >
              <span className="mr-2">Send</span>
              {/* <FaLocationArrow /> */}
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          aria-modal="true"
          role="dialog"
        >
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg max-w-sm w-full mx-4"
          >
            <h2 className="text-lg font-semibold mb-4">Thank you!</h2>
            <p>Your message has been sent successfully.</p>
            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
