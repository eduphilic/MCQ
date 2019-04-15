import Link from "next/link";
import React, { FormEvent } from "react";
import { CreateUserDto } from "../../backend/user/CreateUserDto";

export default function SignupPage() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <br />

      <form onSubmit={handleSubmit}>
        Display Name:&nbsp;
        <input name="displayName" type="text" defaultValue="John Doe" />
        <br />
        <br />
        Mobile Number:&nbsp;
        <input name="phoneNumber" type="tel" defaultValue="12345" />
        <br />
        <br />
        Mobile Verify Number:&nbsp;
        <input name="phoneNumberVerify" type="tel" defaultValue="12345" />
        <br />
        <br />
        Password:&nbsp;
        <input name="password" type="password" defaultValue="123" />
        <br />
        <br />
        Password Verify:&nbsp;
        <input name="passwordVerify" type="password" defaultValue="123" />
        <br />
        <br />
        Recaptcha Token:&nbsp;
        <input name="recaptchaToken" type="text" defaultValue="123" />
        <br />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.persist();

    const fields = Array.from(event.target as HTMLFormElement);

    const createUserDto: CreateUserDto = {
      displayName: "",
      password: "",
      phoneNumber: "",
      recaptchaToken: "",
    };

    fields.forEach(field => {
      if (field.nodeName !== "INPUT") return;
      const inputField = field as HTMLInputElement;
      if (!inputField.name) return;
      if (!Object.keys(createUserDto).includes(inputField.name)) return;
      createUserDto[inputField.name as keyof CreateUserDto] = inputField.value;
    });

    // tslint:disable-next-line:no-floating-promises
    fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createUserDto),
    });
  }
}
