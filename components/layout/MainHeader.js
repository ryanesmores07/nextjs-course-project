import React from "react";
import Link from "next/link";
import styled from "styled-components";

const MainHeader = () => {
  return (
    <Wrapper>
      <header className="header">
        <div className="logo">
          <Link href="/">Next Events</Link>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link href="/events">Browse All Events</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1rem 10%;
    height: 5rem;
    background-color: #202020;
  }

  .logo {
    font-size: 1.5rem;
    color: white;
    font-family: "Fira", sans-serif;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #94fdfd;
  }

  .logo a {
    text-decoration: none;
    color: #94fdfd;
  }

  .navigation a {
    text-decoration: none;
    color: #74dacc;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    .logo {
      font-size: 2.5rem;
    }

    .navigation a {
      font-size: 1.5rem;
    }
  }
`;

export default MainHeader;
