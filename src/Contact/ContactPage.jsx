import Form from "./Form";
import SolidHeader from "../Headers/SolidHeader";

function ContactPage() {
  return (
    <div>
      <SolidHeader />
      <div className="mx-5 max-w-[600px] lg:mx-auto">
        <p className="mb-4 leading-relaxed">
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
