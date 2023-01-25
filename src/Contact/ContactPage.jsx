import Form from "./Form";
import SolidHeader from "../Headers/SolidHeader";

function ContactPage() {
  return (
    <div>
      <SolidHeader />

      <div className="mx-5 max-w-[600px] lg:mx-auto">
        <p>
          Hi besties! Solo travelling can feel overwhelming-- meet with me for a
          1-on-1 touchpoint, where you'll have the ability to ask questions,
          gather insight and seek inspiration, confidence and reassurance, as
          you manifest your next adventure:{" "}
          <a
            href="https://squareup.com/appointments/book/a4t5ys099vkzqp/LNR5VWTK3X6QR/services"
            target="_blank"
            className="text-violet-500 hover:text-violet-800"
          >
            Solo Travel Besties 1-on-1 Travel Life Coaching
          </a>
        </p>
        <br />
        <p className="mb-4 leading-relaxed">
          Alternatively, email me at{" "}
          <a href="mailto:thatgirlsolobackpacking@gmail.com" target="_blank">
            thatgirlsolobackpacking@gmail.com
          </a>{" "}
          or use the form below.
        </p>
        <Form />
      </div>
    </div>
  );
}

export default ContactPage;
