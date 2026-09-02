import { useState, useEffect } from "react";
import sidebarBg from "./assets/images/bg-sidebar-desktop.svg";
import sidebarMobileBg from "./assets/images/bg-sidebar-mobile.svg";
import thankYouIcon from "./assets/images/icon-thank-you.svg";

import PersonalInfo from "./components/personalInfo";
import SelectPlan from "./components/selectPlan";
import AddOns from "./components/addOns";
import FinishingUp from "./components/finishingUp";

function App() {
  const savedData = JSON.parse(localStorage.getItem("multiStepForm")) || {};

  const [currentStep, setCurrentStep] = useState(
    savedData.currentStep || 1
  );

  const [completedSteps, setCompletedSteps] = useState(
    savedData.completedSteps || []
  );

  const [maxStepReached, setMaxStepReached] = useState(
    savedData.maxStepReached || 1
  );

  const [notFound, setNotFound] = useState(false);

  const [name, setName] = useState(savedData.name || "");
  const [email, setEmail] = useState(savedData.email || "");
  const [phone, setPhone] = useState(savedData.phone || "");

  const [showErrors, setShowErrors] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [billing, setBilling] = useState(
    savedData.billing || "monthly"
  );

  const [selectedPlan, setSelectedPlan] = useState(
    savedData.selectedPlan || ""
  );

  const [selectedAddOns, setSelectedAddOns] = useState(
    savedData.selectedAddOns || []
  );

  const [isConfirmed, setIsConfirmed] = useState(
    savedData.isConfirmed || false
  );

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    const formData = {
      currentStep,
      completedSteps,
      maxStepReached,
      name,
      email,
      phone,
      billing,
      selectedPlan,
      selectedAddOns,
      isConfirmed
    };

    localStorage.setItem(
      "multiStepForm",
      JSON.stringify(formData)
    );
  }, [
    currentStep,
    completedSteps,
    maxStepReached,
    name,
    email,
    phone,
    billing,
    selectedPlan,
    selectedAddOns,
    isConfirmed
  ]);

  const handleNameChange = (value) => {
    setName(value);
    setNameError("");
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError("");
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    setPhoneError("");
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      let valid = true;

      setNameError("");
      setEmailError("");
      setPhoneError("");

      if (!name.trim()) {
        setNameError("This field is required");
        valid = false;
      } else if (!/^[A-Za-z ]+$/.test(name.trim())) {
        setNameError("Name can only contain letters");
        valid = false;
      }

      if (!email.trim()) {
        setEmailError("This field is required");
        valid = false;
      } else if (!emailRegex.test(email.trim())) {
        setEmailError("Enter a valid email address");
        valid = false;
      }

      if (!phone.trim()) {
        setPhoneError("This field is required");
        valid = false;
      } else if (
        !/^(\+91[0-9]{10}|[0-9]{10})$/.test(phone.trim())
      ) {
        setPhoneError("Enter a valid 10 digit phone number");
        valid = false;
      }

      if (!valid) {
        setShowErrors(true);
        return;
      }

      setShowErrors(false);
    }

    if (currentStep === 2 && !selectedPlan) {
      alert("Please select a plan before continuing.");
      return;
    }

    setCompletedSteps((prev) => {
      if (prev.includes(currentStep)) {
        return prev;
      }

      return [...prev, currentStep];
    });

    if (currentStep < 4) {
      setMaxStepReached((prev) =>
        Math.max(prev, currentStep + 1)
      );

      handleStepChange(currentStep + 1);
    }
  };

  const handleGoBack = () => {
    if (currentStep > 1) {
      handleStepChange(currentStep - 1);
    }
  };

  const handleStepClick = (step) => {
    if (isConfirmed) {
      return;
    }

    if (step <= maxStepReached) {
      handleStepChange(step);
    }
  };

  const handleSendAnotherResponse = () => {
    localStorage.removeItem("multiStepForm");

    setName("");
    setEmail("");
    setPhone("");

    setNameError("");
    setEmailError("");
    setPhoneError("");
    setShowErrors(false);

    setBilling("monthly");
    setSelectedPlan("");
    setSelectedAddOns([]);

    setCompletedSteps([]);
    setMaxStepReached(1);

    setIsConfirmed(false);
    setCurrentStep(1);

    window.location.hash = "page1";
  };

  const handleConfirm = () => {
    setCompletedSteps((prev) => {
      if (prev.includes(4)) {
        return prev;
      }

      return [...prev, 4];
    });

    setIsConfirmed(true);
    window.location.hash = "confirmation";
  };

  const handleStepChange = (step) => {
    if (isConfirmed) {
      return;
    }

    setCurrentStep(step);
    setIsConfirmed(false);
    setNotFound(false);
    window.location.hash = `page${step}`;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === "") {
        if (savedData.isConfirmed && savedData.completedSteps?.includes(4)) {
          setIsConfirmed(true);
          setNotFound(false);
          window.location.hash = "confirmation";
          return;
        }

        const savedStep = savedData.currentStep || 1;

        if (savedStep <= (savedData.maxStepReached || 1)) {
          setCurrentStep(savedStep);
          setIsConfirmed(false);
          setNotFound(false);
          window.location.hash = `page${savedStep}`;
          return;
        }

        setCurrentStep(1);
        setIsConfirmed(false);
        setNotFound(false);
        window.location.hash = "page1";
        return;
      }

      if (hash === "#page1") {
        setCurrentStep(1);
        setIsConfirmed(false);
        setNotFound(false);
        return;
      }

      if (hash === "#page2") {
        if (maxStepReached >= 2 && !isConfirmed) {
          setCurrentStep(2);
          setIsConfirmed(false);
          setNotFound(false);
        } else if (!isConfirmed) {
          window.location.hash = `page${maxStepReached}`;
        }

        return;
      }

      if (hash === "#page3") {
        if (maxStepReached >= 3 && !isConfirmed) {
          setCurrentStep(3);
          setIsConfirmed(false);
          setNotFound(false);
        } else if (!isConfirmed) {
          window.location.hash = `page${maxStepReached}`;
        }

        return;
      }

      if (hash === "#page4") {
        if (maxStepReached >= 4 && !isConfirmed) {
          setCurrentStep(4);
          setIsConfirmed(false);
          setNotFound(false);
        } else if (!isConfirmed) {
          window.location.hash = `page${maxStepReached}`;
        }

        return;
      }

      if (hash === "#confirmation") {
        if (completedSteps.includes(4)) {
          setIsConfirmed(true);
          setNotFound(false);
        } else {
          window.location.hash = `page${maxStepReached}`;
        }

        return;
      }

      setNotFound(true);
      setIsConfirmed(false);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, [maxStepReached, completedSteps, isConfirmed]);

  if (notFound) {
    return (
      <main className="min-h-screen bg-[#eef5ff] flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-blue-950">
            404
          </h1>

          <h2 className="text-2xl font-bold text-blue-950 mt-4">
            Page Not Found
          </h2>

          <p className="text-gray-400 mt-2">
            The page you are looking for does not exist.
          </p>

          <button
            onClick={() => {
              localStorage.removeItem("multiStepForm");

              setNotFound(false);
              setCurrentStep(1);
              setIsConfirmed(false);
              setCompletedSteps([]);
              setMaxStepReached(1);

              window.location.hash = "page1";
            }}
            className="mt-6 bg-blue-950 text-white px-6 py-3 rounded-lg cursor-pointer"
          >
            Go to Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#eef5ff] md:flex md:items-center md:justify-center md:p-6">
      <div className="relative w-full md:max-w-235 md:h-150 md:bg-white md:rounded-2xl md:p-3 md:flex">
        <aside
          className={`relative w-full h-43 md:w-68.5 md:h-full md:rounded-xl overflow-hidden ${
            isConfirmed ? "pointer-events-none" : ""
          }`}
        >
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={sidebarMobileBg}
            />

            <img
              src={sidebarBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </picture>

          <div className="relative z-10 flex justify-center gap-4 pt-8 md:block md:p-8 md:space-y-8">
            <div
              onClick={() => handleStepClick(1)}
              className={`flex items-center gap-4 ${
                !isConfirmed &&
                (completedSteps.includes(1) || currentStep === 1)
                  ? "cursor-pointer"
                  : ""
              }`}
            >
              <div
                className={`w-9 h-9 shrink-0 rounded-full border border-white flex items-center justify-center ${
                  currentStep === 1
                    ? "bg-white text-blue-950"
                    : "text-white"
                }`}
              >
                1
              </div>

              <div className="hidden md:block">
                <p className="text-white text-xs">STEP 1</p>
                <p className="text-sm font-bold text-white">
                  YOUR INFO
                </p>
              </div>
            </div>

            <div
              onClick={() => handleStepClick(2)}
              className={`flex items-center gap-4 ${
                !isConfirmed &&
                (completedSteps.includes(2) || currentStep === 2)
                  ? "cursor-pointer"
                  : ""
              }`}
            >
              <div
                className={`w-9 h-9 shrink-0 rounded-full border border-white flex items-center justify-center ${
                  currentStep === 2
                    ? "bg-white text-blue-950"
                    : "text-white"
                }`}
              >
                2
              </div>

              <div className="hidden md:block">
                <p className="text-white text-xs">STEP 2</p>
                <p className="text-sm font-bold text-white">
                  SELECT PLAN
                </p>
              </div>
            </div>

            <div
              onClick={() => handleStepClick(3)}
              className={`flex items-center gap-4 ${
                !isConfirmed &&
                (completedSteps.includes(3) || currentStep === 3)
                  ? "cursor-pointer"
                  : ""
              }`}
            >
              <div
                className={`w-9 h-9 shrink-0 rounded-full border border-white flex items-center justify-center ${
                  currentStep === 3
                    ? "bg-white text-blue-950"
                    : "text-white"
                }`}
              >
                3
              </div>

              <div className="hidden md:block">
                <p className="text-white text-xs">STEP 3</p>
                <p className="text-sm font-bold text-white">
                  ADD-ONS
                </p>
              </div>
            </div>

            <div
              onClick={() => handleStepClick(4)}
              className={`flex items-center gap-4 ${
                !isConfirmed &&
                (completedSteps.includes(4) || currentStep === 4)
                  ? "cursor-pointer"
                  : ""
              }`}
            >
              <div
                className={`w-9 h-9 shrink-0 rounded-full border border-white flex items-center justify-center ${
                  currentStep === 4
                    ? "bg-white text-blue-950"
                    : "text-white"
                }`}
              >
                4
              </div>

              <div className="hidden md:block">
                <p className="text-white text-xs">STEP 4</p>
                <p className="text-sm font-bold text-white">
                  SUMMARY
                </p>
              </div>
            </div>
          </div>
        </aside>

        <section className="relative z-20 -mt-18.25 mx-4 rounded-xl bg-white md:mt-0 md:mx-0 md:rounded-none md:bg-transparent md:flex-1 md:flex md:flex-col">
          {isConfirmed ? (
            <div className="min-h-100 md:h-full flex items-center justify-center px-6 py-12 md:px-12">
              <div className="text-center max-w-112.5">
                <img
                  src={thankYouIcon}
                  alt=""
                  className="w-14 md:w-20 mx-auto mb-6 md:mb-7"
                />

                <h1 className="text-2xl md:text-3xl font-bold text-blue-950">
                  Thank you!
                </h1>

                <p className="text-gray-400 mt-3 leading-6">
                  Thanks for confirming your subscription! We hope
                  you have fun using our platform. If you ever need
                  support, please feel free to email us at
                  support@loremgaming.com.
                </p>

                <button
                  onClick={handleSendAnotherResponse}
                  className="mt-6 bg-blue-950 text-white px-6 py-3 rounded-lg cursor-pointer"
                >
                  Send Another Response
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="md:flex-1">
                {currentStep === 1 && (
                  <PersonalInfo
                    name={name}
                    setName={handleNameChange}
                    email={email}
                    setEmail={handleEmailChange}
                    phone={phone}
                    setPhone={handlePhoneChange}
                    showErrors={showErrors}
                    nameError={nameError}
                    emailError={emailError}
                    phoneError={phoneError}
                  />
                )}

                {currentStep === 2 && (
                  <SelectPlan
                    billing={billing}
                    setBilling={setBilling}
                    selectedPlan={selectedPlan}
                    setSelectedPlan={setSelectedPlan}
                  />
                )}

                {currentStep === 3 && (
                  <AddOns
                    billing={billing}
                    selectedAddOns={selectedAddOns}
                    setSelectedAddOns={setSelectedAddOns}
                  />
                )}

                {currentStep === 4 && (
                  <FinishingUp
                    billing={billing}
                    selectedPlan={selectedPlan}
                    selectedAddOns={selectedAddOns}
                    setCurrentStep={handleStepChange}
                  />
                )}
              </div>

              <div className="flex justify-between items-center px-6 py-5 md:px-12 md:pb-8 md:pt-0">
                {currentStep > 1 ? (
                  <button
                    onClick={handleGoBack}
                    className="text-white px-5 py-3 rounded-lg font-medium cursor-pointer hover:text-blue-200 bg-linear-to-r from-blue-500 to-purple-600"
                  >
                    Go Back
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < 4 && (
                  <button
                    onClick={handleNextStep}
                    className="bg-blue-950 text-white px-5 py-3 rounded-lg cursor-pointer"
                  >
                    Next Step
                  </button>
                )}

                {currentStep === 4 && (
                  <button
                    onClick={handleConfirm}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg cursor-pointer"
                  >
                    Confirm
                  </button>
                )}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;