import React from "react";

export const ContactForm = ({ formId, formMarkup }) => {
  return (
    <div
      className="Form"
      dangerouslySetInnerHTML={{__html: formMarkup}}
    />
  )
}