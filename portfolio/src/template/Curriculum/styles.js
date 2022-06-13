import styled from "styled-components";
import Accordion from "@material-ui/core/Accordion";


export const Card = styled("div")`
  flex: 1;
  padding: 30px 30px;
  border-radius: 10px;
  min-height: 650px;
  box-shadow: 0 0 30px 0 rgba(193, 193, 193, 0.25);
  background-color: #ffffff;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 200px;
  margin-right: 50px;
`;

export const AccordionCard = styled(Accordion)`
  margin-bottom: 20px;
  border-radius: 10px;
`

export const Page = styled("div")`
  display: flex;
  background-color: #d4d4d4;
  background-size: cover
`;

export const Titulo = styled("h1")`
  text-align: center;
`;

export const SubTitulo = styled("h3")`
  text-align: center;
`;

export const Label = styled("p")`


`;
