import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xpznvvvg");

  if (state.succeeded) {
    return (
      <p className="font-bold">
        Thanks for contacting me, we’ll be in touch shortly.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-lg bg-slate-50 p-8 text-sm shadow-xl"
    >
      <label htmlFor="name" className="">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        required
        className="mb-3 rounded-lg border-2 border-gray-300 p-1 text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlFor="email" className="">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="mb-3 rounded-lg border-2 border-gray-300 p-1 text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="5"
        required
        className="mb-3 rounded-lg border-2 border-gray-300 p-1 text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="rounded-lg bg-violet-600 p-2 text-center font-medium text-white hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto md:w-1/3"
      >
        Submit
      </button>
    </form>
  );
}
