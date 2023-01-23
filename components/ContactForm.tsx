import Spacer from "./Spacer";
import emailjs from "emailjs-com";
import { useState } from "react";
import { SimpleModal } from "./SimpleModal";
import { PopupButton } from "@typeform/embed-react";

export const ContactForm = () => {
  const [successModal, setSuccessModal] = useState<boolean>(false);

  const handleKeyDown = (e: any) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const SERVICE_ID = "service_y9n1a9t";
  const TEMPLATE_ID = "template_fy238wa";
  const USER_ID = "y7AuvMWzBJ45y1jcI";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        setSuccessModal(true);
      },
      (error) => {
        console.log(error.text);
        // Error message
      }
    );
    e.target.reset();
  };

  return (
    <>
      {/* <PopupButton className="py-3 px-4 copy-bold bg-black text-white rounded-[16px]" id="rUQcTGYz">¡Preséntanos tu proyecto!</PopupButton> */}
      <section className="pb-14">
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
            <p className="huge-title slide-in-left-utility">Cuéntanos</p>
            <form onSubmit={handleSubmit} className="mt-10">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-span-3">
                  <InputField
                    name={"user_name"}
                    copy={"Tu nombre"}
                    type={"text"}
                  />
                </div>
                <div className="md:col-span-3">
                  <InputField
                    name={"user_email"}
                    copy={"Tu correo electrónico"}
                    type={"email"}
                  />
                </div>
                <div className="md:col-span-6 flex flex-col">
                  <label className="" htmlFor="message">
                    Tu mensaje
                  </label>
                  <Spacer size={8} />
                  <textarea
                    className="bg-second text-second border-radius p-2 outline-none"
                    onKeyDown={handleKeyDown}
                    style={{ resize: "none" }}
                    name="user_message"
                  />
                </div>
              </div>
              <Spacer size={16} />
              <div className="md:flex md:items-end md:justify-end mt-4 md:mt-8">
                <button
                  type="submit"
                  className="hover:text-second bg-third hover:bg-second py-2 border-radius px-4 self-end outline-none"
                >
                  Solicita información
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <SimpleModal
        isOpen={successModal}
        onClose={() => setSuccessModal(false)}
        headerText={"¡Gracias!"}
        description={"Nos pondremos en contacto contigo en en breve."}
      />
    </>
  );
};

const InputField = ({
  name,
  copy,
  type,
}: {
  name: string;
  copy: string;
  type: string;
}) => {
  return (
    <>
      <label htmlFor={name}>{copy}</label>
      <Spacer size={8} />
      <input
        className="bg-second border-radius text-second p-2 outline-none"
        type={type}
        name={name}
        required
      />
      <Spacer size={16} />
    </>
  );
};

export default ContactForm;
