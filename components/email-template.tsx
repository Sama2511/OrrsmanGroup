import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  serviceRequired: string;
  originCountryCity: string;
  destinationCountryCity: string;
  message: string;
}

export function EmailTemplate({
  fullName,
  email,
  phoneNumber,
  companyName,
  serviceRequired,
  originCountryCity,
  destinationCountryCity,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "600px",
      }}
    >
      <h1 style={{ color: "#2563eb", marginBottom: "20px" }}>
        New Quote Request
      </h1>

      <p>
        <strong>Name:</strong> {fullName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phoneNumber}
      </p>
      <p>
        <strong>Company:</strong> {companyName}
      </p>

      <hr
        style={{
          margin: "20px 0",
          border: "none",
          borderTop: "1px solid #e5e7eb",
        }}
      />

      <p>
        <strong>Service:</strong> {serviceRequired}
      </p>
      <p>
        <strong>Origin:</strong> {originCountryCity}
      </p>
      <p>
        <strong>Destination:</strong> {destinationCountryCity}
      </p>

      <hr
        style={{
          margin: "20px 0",
          border: "none",
          borderTop: "1px solid #e5e7eb",
        }}
      />

      <p>
        <strong>Message:</strong>
      </p>
      <p
        style={{
          backgroundColor: "#f9fafb",
          padding: "15px",
          borderRadius: "5px",
        }}
      >
        {message}
      </p>
    </div>
  );
}
