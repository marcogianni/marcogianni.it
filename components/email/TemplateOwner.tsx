import * as React from "react";
import { EmailFormValues } from "./ContactForm";

const TemplateOwner: React.FC<Readonly<EmailFormValues>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div>
    <h1>marcogianni.it - Email from {name}</h1>
    <p>email: {email}</p>
    <p>subject: {subject}</p>
    <p>{message}</p>
  </div>
);

export default TemplateOwner;
