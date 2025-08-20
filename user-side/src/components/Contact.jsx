import { useState } from "react";
import { useForm } from "react-hook-form";
//prevents XSS attacks.
import DOMPurify from "dompurify";

import { sendEmail } from "../service/api";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
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
  const onSubmitHandler = async (data) => {
    const sanitizedData = {
      name: DOMPurify.sanitize(data.name),
      email: DOMPurify.sanitize(data.email),
      title: DOMPurify.sanitize(data.title),
      message: DOMPurify.sanitize(data.message)
    };

    try {
      const response = await sendEmail(
        sanitizedData.name,
        sanitizedData.email,
        sanitizedData.title,
        sanitizedData.message
      );

      reset();
      if (response === 200) {
        setSuccessMessage(
          "Your message has been sent successfully. I will get back to you as soon as possible."
        );
      }
    } catch (error) {
      setError("root", {
        message: `Something went wrong, please try again later. ${error.message}`
      });
    }
  };

  return (
    <>
      <section className="contact section-padding services" id="Contact">
        <div className="container">
          <div className="row">
            {/* Title Section */}
            <div className="col-lg-12 col-md-8 col-12">
              <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                <img
                  src="./images/contact.jpg"
                  className="avatar-image img-fluid"
                  alt="Contact"
                />
                <h2 className="text-white ms-4 mb-0">{t("CONTACT_Me")}</h2>
              </div>
            </div>

            <div className="clearfix"></div>

            {/* Info Section */}
            <div className="col-lg-3 col-md-6 col-12 pe-lg-0">
              <div className="contact-info contact-info-border-start d-flex flex-column">
                <strong>{t("Get_in_touch")}</strong>
                <p>{t("Get_in_touch_text")}</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 ps-lg-0">
              <div className="contact-info d-flex flex-column">
                <strong>{t("OR")}</strong>
                <p>{t("OR_TEXT")}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <form
                className="custom-form contact-form"
                role="form"
                onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="row">
                  {/* Name */}
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                      />
                      <label htmlFor="name">{t("Name")}</label>
                      {errors.name && (
                        <span className="text-danger">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder={t("Email")}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                      <label htmlFor="email">{t("Email")}</label>
                      {errors.email && (
                        <span className="text-danger">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="col-lg-12 col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        id="title"
                        className="form-control"
                        placeholder={t("Title")}
                        {...register("title", {
                          required: "Title is required",
                          maxLength: {
                            value: 100,
                            message: "Title is too long"
                          }
                        })}
                      />
                      <label htmlFor="title">{t("Title")}</label>
                      {errors.title && (
                        <span className="text-danger">
                          {errors.title.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="col-lg-12 col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder={t("Tell_me_about_the_project")}
                        {...register("message", {
                          required: "Message is required"
                        })}></textarea>
                      <label htmlFor="message">
                        {t("Tell_me_about_the_project")}
                      </label>
                      {errors.message && (
                        <span className="text-danger">
                          {errors.message.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
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

              {/* Show error message */}
              {errors.root && (
                <span className="text-danger">{errors.root.message}</span>
              )}

              {/* Show success message */}
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
