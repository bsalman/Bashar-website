import { useState } from "react";
import { useForm } from "react-hook-form";
//prevents XSS attacks.
import DOMPurify from "dompurify";

import { sendEmail } from "../service/api";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  //react-hook-form
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      title: "",
      message: ""
    }
  });
  //this function will be as an argument in the handleSubmit function witch wie imported from react-hook-form library
  const onSubmitHandler = (data) => {
    //Prevent XSS (Cross-Site Scripting) attacks by sanitizing user input.
    const sanitizedData = {
      name: DOMPurify.sanitize(data.name),
      email: DOMPurify.sanitize(data.email),
      title: DOMPurify.sanitize(data.title),
      message: DOMPurify.sanitize(data.message)
    };

    sendEmail(
      sanitizedData.name,
      sanitizedData.email,
      sanitizedData.title,
      sanitizedData.message
    )
      .then((receivedData) => {
        reset({ name: "", email: "", title: "", message: "" });

        if (receivedData === 200) {
          setSuccessMessage(
            "Your message has been sent successfully. I will get back to you as soon as possible"
          );
        }
      })
      .catch((error) => {
        setError("root", {
          message: `Something went wrong, please try again later${error.message}`
        });
      });
  };
  return (
    <>
      <section className="contact section-padding services" id="section_5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-8 col-12">
              <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                <img
                  src="./images/contact.jpg"
                  className="avatar-image img-fluid"
                  alt=""
                />

                <h2 className="text-white ms-4 mb-0">Contact Me</h2>
              </div>
            </div>

            <div className="clearfix"></div>

            <div className="col-lg-3 col-md-6 col-12 pe-lg-0">
              <div className="contact-info contact-info-border-start d-flex flex-column">
                <strong>Get in touch</strong>

                <p>
                  I would love to hear from you! Whether you have a project in
                  mind, need further information, or just want to say hello,
                  please feel free to get in touch
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 ps-lg-0">
              <div className="contact-info d-flex flex-column">
                <strong>Or</strong>
                <p>
                  Alternatively, you can fill out the form below, and I will get
                  back to you as soon as possible
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <form
                action="#"
                method="get"
                className="custom-form contact-form"
                role="form"
                onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                      <input
                        type="name"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        required="true"
                        {...register("name", { required: true })}
                      />
                      <label for="floatingInput">Name</label>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email address"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />

                      <label for="floatingInput">Email address</label>
                      {errors.email && (
                        <span className="text-danger">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        placeholder="Title"
                        required="true"
                        {...register("title", {
                          maxLength: {
                            value: 1000,
                            message: "Title is too long"
                          }
                        })}
                      />

                      <label for="floatingInput">Title</label>
                      {errors.text && (
                        <span className="text-danger">
                          {errors.text.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Tell me about the project"
                        {...register("message", { required: true })}></textarea>

                      <label for="floatingTextarea">
                        Tell me about the project
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-12 ms-auto">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="form-control">
                      {isSubmitting ? "Sending..." : "Send"}
                    </button>
                  </div>
                </div>
              </form>
              {/* show error Message */}
              {errors.root && (
                <span className="text-danger">{errors.root.message}</span>
              )}
              {/* show success Message */}
              {successMessage && (
                <div className="alert alert-success mt-3" role="alert">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
