import Form from "./Form";

function ContactPage() {
  return (
    <div>
      <p className="text-2xl leading-relaxed">
        Use the form below to contact me or email me at{" "}
        <a href="mailto:thatgirlsolobackpacking@gmail.com" target="_blank">
          thatgirlsolobackpacking@gmail.com
        </a>
        .
      </p>
      <Form />
    </div>
  );
}

export default ContactPage;
