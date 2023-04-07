import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch("https://getform.io/f/d2b3a458-084d-4180-a47d-d748c144aae8", {
      method: "POST",
      body: new FormData(event.target),
    });

    if (response.ok) {
      alert("Thank you for your message!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <div id="contacts" className="w-full h-screen flex justify-center items-center p-4 text-gray-50 font-lexend">
      <form className="flex flex-col max-w-[600px] w-full" onSubmit={handleSubmit}>
        <div className="pb-8">
          <h1 className="text-4xl font-bold text-center  pt-28">Get in touch!</h1>
        </div>
        <p>What is your name?</p>
        <input
          className="p-2 bg-neutral-900 z-10 rounded-md mb-5 mt-2"
          type="text"
          placeholder="Enter your full name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <p>What is your email address?</p>
        <input
          className="p-2 bg-neutral-900 z-10 rounded-md mb-5 mt-2"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <p>Your message</p>
        <textarea
          className="p-2 bg-neutral-900 z-10 rounded-md mt-2"
          name="message"
          rows={10}
          placeholder="How can I help you?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <button className="btn-yellow mx-auto" type="submit">
          Send your message
        </button>
      </form>
    </div>
  );
}

