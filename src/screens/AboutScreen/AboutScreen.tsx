import React, {useLayoutEffect, useCallback} from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  AboutContainer,
  AboutTitle,
  AboutDescription,
  AboutParagraph,
} from './AboutScreen.styles';

import {
  HeaderContainer,
  HeaderButton,
  HeaderTitle,
} from '../../styles/header-navigator';

const AboutScreen: React.FC<any> = ({navigation}) => {
  const insets = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <HeaderContainer insets={insets.top}>
          <HeaderTitle>Sobre</HeaderTitle>
        </HeaderContainer>
      ),
    });
  }, []);

  return (
    <AboutContainer insets={insets.top}>
      <AboutTitle>O Projeto</AboutTitle>
      <AboutParagraph>
        O mundo inteiro vem enfrentando uma luta árdua contra uma pandemia
        inesperada provocada pelo novo coronavírus causador da doença COVID-19.
      </AboutParagraph>
      <AboutParagraph>
        Órgãos internacionais, nacionais, estaduais, municipais, bem como
        entidades e empresas privadas, têm trabalhado incessantemente, tanto no
        tratamento e busca de vacinas/remédios, quanto na prevenção e controle
        da doença através do compartilhamento de informações.
      </AboutParagraph>
      <AboutParagraph>
        Neste sentido, percebe-se uma lacuna referente à concentração da
        disseminação de informações relacionados à COVID-19 no âmbito municipal
        e regional, que muitas vezes é limitada a notícias publicadas no site
        oficial de prefeituras e/ou posts de redes sociais.
      </AboutParagraph>
      <AboutParagraph>
        Tal lacuna se traduz em um problema de acesso a informações importantes
        como número de novos casos, número de pacientes recuperados, número de
        leitos disponíveis, impactos relacionados à flexibilização do isolamento
        social, dentre outros, prejudicando ações locais e regionais de
        enfrentamento à pandemia.
      </AboutParagraph>
      <AboutParagraph>
        Neste sentido, este projeto de extensão é um painel digital, disponível
        nas plataformas web e mobile, para o compartilhamento de informações
        georreferenciadas, emissão de alertas, análise estatísticas de dados e
        visualização de projetos e informações sobre doações relacionados ao
        enfrentamento da COVID-19 nos municípios das microrregiões de Ubá e Juiz
        de Fora.
      </AboutParagraph>
      <AboutParagraph>
        A partir deste painel digital, projetado e desenvolvido pelos alunos e
        professores do curso de Ciência da Computação do Campus Rio Pomba,
        cidadãos e líderes municipais e regionais poderão tomar decisões mais
        assertivas relacionadas ao combate da pandemia.
      </AboutParagraph>

      <AboutTitle ma="30px">Sobre</AboutTitle>
      <AboutDescription>
        Confira a seguir os alunos e professores colaboradores do projeto:
      </AboutDescription>
    </AboutContainer>
  );
};

export default AboutScreen;
