import * as React from "react";
import { EmailFormValues } from "./ContactForm";

const TemplateUser: React.FC<Readonly<EmailFormValues>> = ({ name }) => (
  <div>
    <h1>Thank you, {name}!</h1>
    <h5>
      This email is simply a confirmation of receipt of your contact. I will get
      back to you as soon as possible.
    </h5>
  </div>
);

export default TemplateUser;
