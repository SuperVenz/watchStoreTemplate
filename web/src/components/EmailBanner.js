import React from "react";
import styled from "styled-components";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
const Wrapper = styled(BackgroundImage)``;
function EmailBanner({ title, button, description, image }) {
  // Form Data ,encoding, and handling
  const [email, setEmail] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        email: email,
      }),
    })
      .then(() => alert("hello"))
      .catch((error) => alert(error));
  };
  const formBackground = convertToBgImage({ image });
  return (
    <Wrapper {...formBackground} preserveStackingContex>
      <h1>{title}</h1>
      <form
        autoComplete="on"
        netlify-honeypot="bot-field"
        name="emailSignUp"
        method="POST"
        data-netlify="true"
        action="/"
        onSubmit={handleSubmit}
      >
        <input name="form-name" value="Netlify Rocks" type="hidden" />
        <input type="hidden" name="bot-field" />
        <label>
          Email
          <input
            required
            type="text"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <button type="submit" onSubmit={handleSubmit}>
          {button}
        </button>
      </form>
      <p>{description}</p>
    </Wrapper>
  );
}

export default EmailBanner;
