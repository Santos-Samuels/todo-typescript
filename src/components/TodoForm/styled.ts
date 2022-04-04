import styled from "styled-components";

export const Form = styled.form`
  margin: 20px 0 40px 0;

  & input {
    border: solid 1px rgba(5, 4, 4, 0.1);
    border-radius: 8px;
    padding: 8px;
    width: 80%;
    margin-right: 10px;
  }

  & button {
    border: solid 1px rgba(4, 160, 17, 0.1);
    border-radius: 8px;
    padding: 8px;
    width: 15%;
    background-color: #86dc3d;
    color: #ffff;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
  }

  & button:hover {
    background-color: #76c530;
  }

  & p {
    color: red;
    text-align: center;
    font-size: 13px;
  }
`;