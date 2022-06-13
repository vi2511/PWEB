import React from "react";
import Grid from "@material-ui/core/Grid";
import { Card, Page, Titulo, Label, SubTitulo } from "./styles";
import Image from "../../component/Image";
import perfil from "../../assets/images/perfil.jpg";
import Background from "../../assets/images/background.jpeg";

const Home = () => {
  return (
    <Page style={{ backgroundImage: `url(${Background})` }}>
      <Card>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Titulo>Vinicius Augusto Figueiredo Bistão Martins</Titulo>
          </Grid>

          <Grid item xs={12}>
            <Image alt="perfil" src={perfil} height={350} width={350} />
          </Grid>
          <Grid item xs={12}>
            <Label>Desenvolvedor Front-End pela GFT Brasil, apaixonado por ciências e tecnologia.</Label>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid xs={12}>
            <SubTitulo>Objetivos Profissionais</SubTitulo>
            <ul>
              <li>
                Evoluir tecnicamente em desenvolvimento Front-End sempre
                disposto a aprender novas tecnologias e aceitar desafios.
              </li>
              <li>
                Ser uma referência técnica entre os colaboradores da empresa
                auxiliando no crescimento da equipe.
              </li>
              <li>
                Ampliar as habilidades interpessoais juntamente com membros da
                equipe e cliente.
              </li>
            </ul>
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};

export default Home;
