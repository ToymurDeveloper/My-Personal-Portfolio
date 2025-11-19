import { CheckCircle, Send } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "d5ff3836-402a-42ef-8cc1-095558f3d584");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("success");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className='w-full px-[5%] pb-5 scroll-mt-32 bg-[url("/assets/images/footer-bg-color.png")] dark:bg-none bg-no-repeat bg-center bg-size-[90%_auto]'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover dark:border-white/90 dark:placeholder:text-white/70"
            required
            disabled={isLoading}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover dark:border-white/90 dark:placeholder:text-white/70"
            required
            disabled={isLoading}
          />
        </div>
        <textarea
          rows="4"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-dark-hover dark:border-white/90 dark:placeholder:text-white/70"
          required
          name="message"
          disabled={isLoading}
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.01 }}
          className="cursor-pointer py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 disabled:bg-gray-400 disabled:cursor-not-allowed dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit now"}
          <Send className="ms-1" size={17} />
        </motion.button>
        {result === "success" && (
          <div className="mt-5 font-medium mx-auto font-ovo text-white py-2.5 rounded-md text-center w-72 text-lg bg-green-600">
            <div className="flex justify-center items-center">
              <span>Form Submitted Successfully</span>
              <CheckCircle className="ms-2" size={23} />
            </div>
          </div>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
