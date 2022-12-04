import { useState } from "react";
import Spacer from "./Spacer";

export const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleKeyDown = (e: any) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // let isValidForm = handleValidation();

     
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }
    console.log(fullname, email, subject, message);
  };
  return (
    <form onSubmit={handleSubmit} className="card-next">
      <h3>Contáctanos</h3>
      <Spacer size={8} />
      <h1 className="text-2xl font-bold dark:text-gray-50">
        ¡Podemos ayudarte!
      </h1>
      <Spacer size={8} />
      <p>
        Nos encantan los desafíos y trabajamos con gusto para ayudarte a sacar
        provecho de la tecnología.
      </p>
      <Spacer size={24} />

      <InputField
        name={"fullname"}
        copy={"Tu nombre"}
        type={"text"}
        state={fullname}
        setState={setFullname}
      />
      <InputField
        name={"email"}
        copy={"Tu correo electrónico"}
        type={"email"}
        state={email}
        setState={setEmail}
      />
      <InputField
        name={"subject"}
        copy={"Tu asunto"}
        type={"text"}
        state={subject}
        setState={setSubject}
      />

      <label htmlFor="message">
        Tu mensaje<span className="text-red-500">*</span>
      </label>
      <Spacer size={8} />
      <textarea
        className="w-full min-h-[120px] p-1"
        onKeyDown={handleKeyDown}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        style={{resize: 'none'}}
        name="message"
      />
      <Spacer size={16} />
      <button
        type="submit"
        className="px-4 py-2 bg-[#000000] text-white rounded-[8px]"
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
  state,
  setState,
}: {
  name: string;
  copy: string;
  type: string;
  state: any;
  setState: any;
}) => {
  return (
    <>
      <label htmlFor={name}>
        {copy}
        <span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <Spacer size={8} />
      <input
        className="h-7"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
        type={type}
        name={name}
      />
      <Spacer size={16} />
    </>
  );
};

export default ContactForm;
