import React from "react";
import styled from "styled-components";
import service1 from "./assets/service1.png";
import service2 from "./assets/service2.png";
import service3 from "./assets/service3.png";
import service4 from "./assets/service4.png";

import hotel from "./assets/Hotel.png"
import resto from "./assets/resto.png"
import posts from "./assets/posts.png"
import { useHistory } from 'react-router-dom';

export default function Services() {
  const history = useHistory();
  const openPost = (e) => {
    // dispatch(getPost(post._id, history));

    history.push(`/`);
  };

  const data = [
    {
      icon: posts,
      title: "POSTs",
      subTitle:
          "share and discover new places ",
    },
    {
      icon: hotel,
      title: "Hotles",
      subTitle:
          "discover morocco best hotels and what people's reviews about them",
    },
    {
      icon: resto,
      title: "Restaurants",
      subTitle:
           "Browse the list of various restaurants and discover Moroccan and international cooking",
    },
    
  ];
  return (
    <Section id="services" onClick={openPost}>
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
      
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
