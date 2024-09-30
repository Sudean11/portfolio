import { Container, ContainerSucces } from "./styles";
import { useForm } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import validator from "validator";

export function Form() {
  const [state, handleSubmit] = useForm("xknkpqry"); // This line can be removed since you are not using Formspree anymore
  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false); // If not using reCAPTCHA, this can be removed
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
      setEmail(email);
    } else {
      setValidEmail(false);
    }
  }

  async function handleSubmitForm(e: any) {
    e.preventDefault();

    const data = {
      email: email,
      message: message,
    };

    try {
      const response = await fetch(
        "https://gv7swoe43e.execute-api.us-east-1.amazonaws.com/prod/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Email successfully sent!", {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: "succeeded",
        });
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send email. Please try again later.", {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: "failed",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: "error",
      });
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Email successfully sent!", {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: "succeeded",
      });
    }
  });

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmitForm}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          disabled={!validEmail || !message}>
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
