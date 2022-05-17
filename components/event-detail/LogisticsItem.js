import styled from "styled-components";

function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <Wrapper>
      <li className="item">
        <span className="icon">
          <Icon />
        </span>
        <span className="content">{props.children}</span>
      </li>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .item {
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: #aefff8;
  }

  .item span {
    display: block;
  }

  .icon {
    margin-right: 1rem;
    color: #18e0d0;
  }

  .icon svg {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: 768px) {
    .item {
      align-items: flex-start;
      text-align: left;
    }
  }
`;

export default LogisticsItem;
