import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const theme = {
  primary: "teal",
  secondary: "green",
  alert: "cyan",
};

export const MainContainer = styled.div`
  margin: 0 auto;
`;

export const Wellcome = styled.h1`
  text-align: center;
  color: maroon;
  font-size: 1.1rem;
  padding-bottom: 30px;
`;

export const PolygonDivsContainer = styled.div`
  position: relative;
  flex-grow: 1;
  margin: auto;
  max-width: 600px;
  max-height: 600px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1vmin;
  justify-items: center;
  align-items: center;
`;

export const PolygonDiv = styled.div`
  z-index: 1;
  grid-column: span 2;
  max-width: 100%;
  margin-bottom: -52%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  transform: scale(1);
  transition: all 0.25s;
  cursor: pointer;

  &:nth-child(7n + 1) {
    grid-column: 2 / span 2;
  }

  &:hover {
    z-index: 2;
    transform: scale(1.1);
  }
`;

export const PolygonImg = styled.img`
  width: 150px;
  height: 150px;
`;

export const Button = styled.button`
  font-family: sans-serif;
  border: none;
  margin: 10px;
  padding: 15px 45px;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  /* background: ${({ primary }) => (primary ? "bluesteel" : "coral")}; */
  /* background: ${(props) => props.theme.primary}; */
  /* ${(props) =>
    props.color &&
    css`
      background: ${(props) => props.theme[props.color]};
    `} */
  background-image: linear-gradient(
    to right,
    #e52d27 0%,
    #b31217 51%,
    #e52d27 100%
  );
  color: #fff;
  cursor: pointer;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export const FormContainer = styled.div`
  width: 40%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const FormImg = styled.img`
  border-radius: 5px;
  width: 100%;
  max-height: 450px;
  opacity: 0.8;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > input {
    margin: 10px;
    width: 300px;
    padding: 10px;
  }

  & > button {
    width: 150px;
  }
`;

export const CreatedContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const HomeLink = styled(Link)`
  position: absolute;
  right: 10px;
  text-decoration: none;
  text-transform: uppercase;
  background: white;
  padding: 20px;
  margin-top: 10px;
  border-radius: 10px;
  &:hover {
    opacity: 0.9;
    border-radius: 20px;
  }
`;
