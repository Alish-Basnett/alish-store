import React, { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState("");

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=6LcC1jkqAAAAAPubQthDLKCczW37SdyKAfr0-n-6`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name should be at least 3 characters long";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Message validation
    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to send data to the reCAPTCHA Enterprise API
  const assessReCaptcha = async (token) => {
    const url = `https://recaptchaenterprise.googleapis.com/v1/projects/alish-store-1725789525297/assessments?key=YOUR_API_KEY`;

    const data = {
      event: {
        token: token,
        siteKey: "6LcC1jkqAAAAAPubQthDLKCczW37SdyKAfr0-n-6",
        expectedAction: "submit",
      },
    };

    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error("Error assessing reCAPTCHA token", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }

    if (validateForm()) {
      const recaptchaResult = await assessReCaptcha(captchaToken);

      if (
        recaptchaResult &&
        recaptchaResult.riskAnalysis &&
        recaptchaResult.riskAnalysis.score >= 0.5
      ) {
        // If score is above a certain threshold, we assume it's a legitimate user
        setSubmissionStatus("Success: Form submitted successfully!");

        // Simulate form submission
        console.log("Form data", formData);
      } else {
        setSubmissionStatus(
          "Error: CAPTCHA verification failed. Please try again."
        );
      }

      // Clear CAPTCHA token after submission
      setCaptchaToken(null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCaptcha = () => {
    // Execute reCAPTCHA v3
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LcC1jkqAAAAAPubQthDLKCczW37SdyKAfr0-n-6", {
          action: "submit",
        })
        .then((token) => {
          setCaptchaToken(token); // Save the token for later use
        })
        .catch((error) => {
          console.error("Error executing reCAPTCHA", error);
        });
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-20">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="contact-info">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Have any questions? Feel free to reach out to us through any of
              the following contact methods. We’re happy to assist you!
            </p>
            <ul className="space-y-4">
              <li>
                Email:{" "}
                <a
                  href="mailto:alishstore.np@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  alishstore.np@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+9779807936169"
                  className="text-blue-600 hover:underline"
                >
                  +977 9807936169
                </a>
              </li>
              <li>Address: Pashupatinagar -4, Illam, Nepal</li>
            </ul>
          </div>

          <div className="contact-form">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                handleCaptcha(); // Trigger reCAPTCHA
                handleSubmit(e); // Submit form
              }}
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button className="btn btn-primary w-full" type="submit">
                Send Message
              </button>
            </form>
            {submissionStatus && (
              <p
                className={`mt-4 ${
                  submissionStatus.startsWith("Success")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {submissionStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
