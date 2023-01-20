import Form from "./Form";
import SolidHeader from "../Headers/SolidHeader";

function ContactPage() {
  return (
    <div>
      <SolidHeader />
      <div className="mx-auto max-w-[600px]">
        <p className="mb-4 text-lg leading-relaxed">
          Use the form below to contact me or email me at{" "}
          <a href="mailto:thatgirlsolobackpacking@gmail.com" target="_blank">
            thatgirlsolobackpacking@gmail.com
          </a>
          .
        </p>
        <Form />
      </div>
    </div>
  );
}

export default ContactPage;
