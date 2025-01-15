import React from "react";

const RegistrationForm = () => {
  return (
    <div className="form-container">
      <iframe
        id="registration-form-iframe"
        title="Registration Form"
        width="640"
        height="480"
        src="https://forms.office.com/r/hyHREY7ZVh?embed=true"
        frameBorder="0"
        style={{
          border: "none",
          maxWidth: "100%",
          maxHeight: "100vh",
          margin: "2rem auto",
          display: "block",
        }}
        allowFullScreen
      />
    </div>
  );
};

export default RegistrationForm;
