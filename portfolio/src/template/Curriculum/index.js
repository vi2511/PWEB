import React from "react";
import Grid from "@material-ui/core/Grid";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Card, Page, Titulo, Label, AccordionCard, SubTitulo } from "./styles";
import Image from "../../component/Image";
import perfil from "../../assets/images/perfil.jpg";
import Background from "../../assets/images/background.jpeg";
import Original from "../../assets/images/original.jpeg";
import Share from "../../assets/images/share.jpeg";
import Mitre from "../../assets/images/mitre.jpeg";
import Agiw from "../../assets/images/agiw.jpeg";
import Prof1 from "../../assets/images/prof1.jpeg";
import Prof2 from "../../assets/images/prof2.jpeg";
import Prof3 from "../../assets/images/prof3.jpeg";

const Curriculum = () => {
  return (
    <Page style={{ backgroundImage: `url(${Background})` }}>
      <Card>
        <div><Titulo>Experiências Profissionais</Titulo></div>
        <AccordionCard>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SubTitulo>2021/2022 - GFT</SubTitulo>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid item xs={12}>
                <h3>Banco Original</h3>
              </Grid>
              <Grid item xs={4}>
                <Image alt="Original" src={Original} height={350} width={250} />
              </Grid>
              <Grid item xs={8}>
                <Label>Desenvolvedor mobile responsável pela área de Cartões do aplicativo utilizando tecnologias como Angular e Ionic</Label>
              </Grid>
              <Grid item xs={12}>
                <h3>Share Student Living</h3>
              </Grid>
              <Grid item xs={4}>
                <Image alt="Share" src={Share} height={450} width={250} />
              </Grid>
              <Grid item xs={8}>
                <Label>Desenvolvedor WEB/Mobile responsável pelo site de vendas da empresa e o aplicativo utilizando tecnologias como React e React Native</Label>
              </Grid>
              <Grid item xs={12}>
                <h3>Mitre expirence</h3>
              </Grid>
              <Grid item xs={4}>
                <Image alt="Mitre" src={Mitre} height={450} width={250} />
              </Grid>
              <Grid item xs={8}>
                <Label>Desenvolvedor WEB/Mobile responsável pelo site de Marketing da empresa e o aplicativo utilizando tecnologias como React e React Native</Label>
              </Grid>
            </Grid>
          </AccordionDetails>
        </AccordionCard>
        <AccordionCard>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SubTitulo>2019/2021 - Agiw Sistemas</SubTitulo>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid item xs={6}>
                <Image alt="Agiw" src={Agiw} height={450} width={550} />
              </Grid>
              <Grid item xs={6}>
                <Label>Desenvolvedor Delphi do ERP de gestão empresarial atuando na implementação de novas funcionalidade e manutenção do sistema</Label>
              </Grid>
            </Grid>
          </AccordionDetails>
        </AccordionCard>
        <AccordionCard>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SubTitulo>2012/2019 - Professor</SubTitulo>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid item xs={4}>
                <Image alt="Prof1" src={Prof1} height={250} width={350} />
              </Grid>
              <Grid item xs={4}>
                <Image alt="Prof2" src={Prof2} height={250} width={350} />
              </Grid>
              <Grid item xs={4}>
                <Image alt="Prof3" src={Prof3} height={250} width={350} />
              </Grid>
              <Grid item xs={12}>
                <Label>Professor de robótica e informática e técnico da equipe de robótica na disputa de torneios</Label>

              </Grid>
            </Grid>
          </AccordionDetails>
        </AccordionCard>
      </Card>
    </Page>
  );
};

export default Curriculum;
