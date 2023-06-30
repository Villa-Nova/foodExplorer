import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

import { Container, Banner, BannerImg, BannerContent } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import ImgBanner from "../../assets/bannerImg.png";

import { api } from "../../services/api";

export function Home() {

  const [ dishes, setDishes ] = useState([]);
  const [ search, setSearch ] = useState("");

  useEffect(() => {
    async function searchDishes() {
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);
    };

    searchDishes();
  }, [search]);

  return(
    <Container>
      <Header search={setSearch} />

      <Banner >
        <BannerImg>
          <img src={ImgBanner} alt="Foto de bolachas recheadas e frutas" />
        </BannerImg>

        <BannerContent>
          <h3>Sabores inigualáveis</h3>
          <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
        </BannerContent>
      </Banner>
      
      {
        dishes.filter(dish => dish.category === "refeição").length > 0 &&
        <Section title="Refeições" >
          <CaretLeft size={40} />
          {
            dishes.filter(dish => dish.category == "refeição")
            .map((item, index) => (
              <Card 
                key={String(index)}
                data={item}
              />
            ))
          }
          <CaretRight size={40} />
        </Section>
      }

      {
        dishes.filter(dish => dish.category === "sobremesa").length > 0 &&
        <Section title="Sobremesas" >
          <CaretLeft size={40} />
          {
            dishes.filter(dish => dish.category == "sobremesa")
            .map((item, index) => (
              <Card 
                key={String(index)}
                data={item}
              />
            ))
          }
          <CaretRight size={40} />
        </Section>
      }

      {
        dishes.filter(dish => dish.category === "bebida").length > 0 &&
        <Section title="Bebidas" >
          <CaretLeft size={40} />
          {
            dishes.filter(dish => dish.category == "bebida")
            .map((item, index) => (
              <Card 
                key={String(index)}
                data={item}
              />
            ))
          }
          <CaretRight size={40} />
        </Section>
      }

      <Footer />
    </Container>
  );
};