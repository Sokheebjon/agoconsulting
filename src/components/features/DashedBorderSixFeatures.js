import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import {css} from "styled-components/macro";
import {SectionHeading} from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import {ReactComponent as SvgDecoratorBlob3} from "../../images/svg-decorator-blob-3.svg";

import korea from "../../images/demo/korea.jpeg";
import kyrgyz from "../../images/demo/kyrgyz.jpg";
import moscow from "../../images/demo/moscow.jpg";
import tadjik from "../../images/demo/tadjik.jpg";
import turkey from "../../images/demo/turkey.jpg";
import kazak from "../../images/demo/kazak.jpg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center rounded border-dashed border-primary-500 rounded-lg mt-12`}
    img {
      ${tw`rounded-lg`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
    /*
     * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
     *  1) imageSrc - the image shown at the top of the card
     *  2) title - the title of the card
     *  3) description - the description of the card
     *  If a key for a particular card is not provided, a default value is used
     */

    const cards = [
        {
            imageSrc: turkey,
            title: "Turkiya"
        },
        {imageSrc: korea, title: "Janubiy Koreya"},
        {imageSrc: moscow, title: "Rossiya"},
        {imageSrc: kazak, title: "Qozog'iston"},
        {imageSrc: tadjik, title: "Tojikiston"},
        {imageSrc: kyrgyz, title: "Qirg'iziston"}
    ];

    return (
        <Container>
            <ThreeColumnContainer>
                <Heading>Bizning <span tw="text-primary-500">Universtitetlar</span></Heading>
                {cards.map((card, i) => (
                    <Column key={i}>
                        <Card>
                            <img src={card.imageSrc || defaultCardImage} alt=""/>
                            <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
              </span>
                        </Card>
                    </Column>
                ))}
            </ThreeColumnContainer>
            <DecoratorBlob/>
        </Container>
    );
};
