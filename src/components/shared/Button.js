import styled from "styled-components";

const accentColor = "blue";

const Button = styled.button`
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "primary" ? accentColor : "white"};
  border-radius: 9999px;
  border-styled: solid;
  border-width: 1px;
  border-color: ${accentColor};
  color: ${(props) => (props.variant === "primary" ? "white" : accentColor)};
  display: inline-flex;
  align-items: center;
  font: inherit;
  font-weight: bold;
  min-height: 36px;
  justify-content: center;
  min-width: 72px;
  outline-style: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? "lightblue" : "darkblue"};
  }
`;

export default Button;
