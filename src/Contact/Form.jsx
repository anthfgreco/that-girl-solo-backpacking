import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm("xpznvvvg");

  if (state.succeeded) {
    return <p>Thanks for contacting me, we'll be in touch shortly.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
      <label htmlFor="name" className="text-xl">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        required
        className="rounded-lg border-2 border-gray-300 p-1 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlFor="email" className="mt-3 text-xl">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="rounded-lg border-2 border-gray-300 p-1 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="mt-3 text-xl">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="5"
        required
        className="rounded-lg border-2 border-gray-300 p-1 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto md:w-1/3"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
