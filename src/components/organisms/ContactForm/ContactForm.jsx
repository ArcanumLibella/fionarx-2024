import React from "react";

export const ContactForm = ({ formId, formMarkup }) => {
  return (
    <fieldset
      className="Form"
      dangerouslySetInnerHTML={{__html: formMarkup}}
    />
  )
}