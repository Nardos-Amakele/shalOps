"use client";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_nynkufg",
        "template_nwadera",
        {
          to_email: "shalops.plc@gmail.com",
          contact_info: email,
          message: `New contact request from Contact section: ${email}`,
        },
        "t1dYz76Jc5mj4xXLW"
      );

      setSubmitStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 10000);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-16 sm:py-24 space-y-6 text-center"
    >
      <h1 className="text-2xl sm:text-3xl font-bold">
        Let&apos;s help your business thrive
      </h1>
      <p className="text-sm font-light sm:text-base">
        Send us your email and we will get back to you
      </p>

      {/* Form */}
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-2/3 md:w-full flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {submitStatus ? (
            <div
              className={`w-full px-4 py-3 rounded-lg text-center ${
                submitStatus === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitStatus === "success"
                ? "Thank you! We'll contact you soon."
                : "Oops! Something went wrong. Please try again."}
            </div>
          ) : (
            <>
              <input
                type="email"
                placeholder="Enter your email/Phone Number"
                className="w-full sm:w-auto shadow-md rounded-lg px-6 py-3 bg-[#d2ceda] focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={isSubmitting || !email.trim()}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#8C52FF] to-[#160E23] text-white font-semibold rounded-lg shadow-md hover:opacity-90 disabled:opacity-70 transition-all duration-200"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Get In Touch"
                )}
              </button>
            </>
          )}
        </form>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm sm:text-base mt-10">
        <div className="flex items-center gap-2">
          <FaPhone className="w-4 h-4" />
          <a href="tel:+251-092-059-09">+251-993-971-420</a>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="w-4 h-4" />
          <a href="mailto:shalops.digitals@gmail.com">
            shalops.digitals@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarker className="w-4 h-4" />
          <a href="https://goo.gl/maps/1234567890">
            4 Kilo, Addis Ababa, Ethiopia
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
