import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "./assets/Destination1.png";
import Destination2 from "./assets/Destination2.png";
import Destination3 from "./assets/Destination3.png";
import Destination4 from "./assets/Destination4.png";
import Destination5 from "./assets/Destination5.png";
import Destination6 from "./assets/Destination6.png";
import info1 from "./assets/info1.png";
import info2 from "./assets/info2.png";
import info3 from "./assets/info3.png";

import tanger from "./assets/tanger.jpg"
import merzouga from "./assets/5.jpg"
import choun from './assets/18.jpg'
import kech from './assets/10.jpg'
import fes from './assets/site3.jpg'
import agadir from './assets/88.jpg'

export default function Recommend() {
  const data = [
    {
      image: tanger,
      title: "tanger",
      subTitle: "Tangier retains its powerful charm to this day… From the previously nefarious alleys in the Petit Socco area to the many café terraces which are more than ever avant-gardist.",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: merzouga,
      title: "Merzouga",
      subTitle: "Zagora cannot be known for major architectural monuments, despite the fact that it dates back to the 13th century. However, Zagora remains an interesting spot to discover the south-eastern of Morocco. ",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: choun,
      title: "Chefchaouen City",
      subTitle: "Chefchaouen is a city with blue and white lime-washed houses. A powerful charm that you really can feel in the Outa-el-Hammam square, in the cobblestone medina.",


    },
    {
      image: kech,
      title: "Marrakech",
      subTitle: "Colorful souks, Moorish architecture, intimate gardens and boutique hotels--Marrakesh is unforgettable. Spend your days exploring the quiet courtyards and snaking alleyways of the historic Medina, walking through the serene Jardin Majorelle or taking in the beauty of the city’s mosques before ending the evening at a one-of-a-kind riad.",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: fes,
      title: "Fes",
      subTitle: "The Medina of Fez preserves, in an ancient part comprising numerous monumental buildings, the memory of the capital founded by the Idrisid dynasty between 789 and 808 A.D.",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: agadir,
      title: "Agadir",
      subTitle: "Agadir is a major modern city in the southern part of Morocco. It is of interest primarily because of its location, as it is surrounded by the Anti Atlas, the Sahara Desert on the Atlantic coast with many national parks, and secluded beaches which are all easily accessible.",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
             
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
    color: white ;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: white;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
