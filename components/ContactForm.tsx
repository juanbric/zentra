import Spacer from "./Spacer";
import emailjs from "emailjs-com";

export const ContactForm = () => {
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
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <h3>Contáctanos</h3>
      <Spacer size={12} />
      <h1 className="title-bold">¡Podemos ayudarte!</h1>
      <Spacer size={16} />
      <p>
        Nos encantan los desafíos y trabajamos con gusto para ayudarte a sacar
        provecho de la tecnología.
      </p>
      <Spacer size={24} />

      <InputField name={"user_name"} copy={"Tu nombre"} type={"text"} />
      <InputField
        name={"user_email"}
        copy={"Tu correo electrónico"}
        type={"email"}
      />

      <label className="copy" htmlFor="message">
        Tu mensaje
      </label>
      <Spacer size={8} />
      <textarea
        className="w-full bg-[#f5f5f5] rounded-[8px] p-1"
        onKeyDown={handleKeyDown}
        style={{ resize: "none" }}
        name="user_message"
      />
      <Spacer size={16} />
      <button
        type="submit"
        className="px-4 py-2 bg-[#1d1d1d] text-white rounded-[8px]"
      >
        Solicita información
      </button>
    </form>
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
        className="p-2 bg-[#f5f5f5] rounded-[8px]"
        type={type}
        name={name}
        required
      />
      <Spacer size={16} />
    </>
  );
};

export default ContactForm;
