import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubscribe() {
    if (email.trim() === "") {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-2xl bg-slate-900 px-6 py-16 text-center">

          {/* Heading */}
          <h2 className="text-4xl font-bold text-white">
            Subscribe To Our Newsletter
          </h2>

          {/* Description */}
          <p className="mt-4 text-lg text-gray-300">
            Get latest products, offers and exclusive discounts directly in
            your inbox.
          </p>

          {/* Email + Button */}
          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 outline-none focus:border-blue-500"
            />

            <button
              onClick={handleSubscribe}
              className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Subscribe
            </button>

          </div>

          {/* Message */}
          {message && (
            <p className="mt-4 text-green-400">
              {message}
            </p>
          )}

        </div>

      </div>
    </section>
  );
}

export default Newsletter;