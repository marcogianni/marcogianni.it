import * as React from "react";
import { EmailFormValues } from "../ContactForm";

const TemplateOwner: React.FC<Readonly<EmailFormValues>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>marcogianni.it - Email from {name}</h1>
    <p>email: {email}</p>
    <p>{message}</p>
  </div>
);

export default TemplateOwner;
