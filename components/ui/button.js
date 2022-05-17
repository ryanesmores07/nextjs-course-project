import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Button = (props) => {
  console.log(props.children);
  {
    props.link && (
      <Wrapper>
        <Link href={props.link}>
          <a className="btn">{props.children}</a>
        </Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <button className="btn" onClick={props.onClick}>
        {props.children}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  padding: 0;
  border: 0;
  .btn {
    display: flex;
    text-decoration: none;
    align-items: center;
    cursor: pointer;
    font: inherit;
    background-color: #03be9f;
    border: 1px solid #03be9f;
    border-radius: 6px;
    color: #dafff7;
    padding: 0.5rem 1.5rem;
    text-align: center;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  }

  .btn:hover,
  .btn:active {
    background-color: #02afa1;
    border-color: #02afa1;
  }
`;

export default Button;
