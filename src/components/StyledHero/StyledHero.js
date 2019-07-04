import styled from "styled-components";

const StyledHero = styled.header`
  min-height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),
    url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledHero;
