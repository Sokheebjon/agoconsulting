import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import {SectionHeading, Subheading as SubheadingBase} from "components/misc/Headings.js";
import {PrimaryButton as PrimaryButtonBase} from "components/misc/Buttons.js";
import {ReactComponent as BriefcaseIcon} from "feather-icons/dist/icons/briefcase.svg";
import {ReactComponent as MoneyIcon} from "feather-icons/dist/icons/dollar-sign.svg";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import {Link} from "react-scroll";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
    tw`md:w-7/12 mt-16 md:mt-0`,
    props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
    SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5 text-primary-500`}
  }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`font-bold text-lg text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-sm`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

export default ({
                    subheading = "Our Expertise",
                    heading = (
                        <>
                            Bizning <span tw="text-primary-500">jamoamiz</span>
                        </>
                    ),
                    description = "Bizning jamoa yuqori malakali mutaxassislardan iborat va har biri nufuzli universitetlarida ta'lim olgan. Bundan tashqari, kompaniyamizning har bir xodimi tashqi ta'lim bozoridagi so‘nggi voqea va tendensiyalardan xabardor ekanligi katta afzallikdir.",
                    primaryButtonText = "Murojat qilish",
                    features = null,
                    textOnLeft = true
                }) => {
    // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

    /*
     * Change the features variable as you like, add or delete objects
     * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
     */
    const defaultFeatures = [
        {
            Icon: BriefcaseIcon,
            title: "Professionalizm",
            description: "Biz ishonch va yuqori sifatli xizmatlarimiz bilan xorijiy ta'lim sohasida xizmat ko‘rsatuvchi kompaniyalar reytingida yetakchi o‘rinlardamiz."
        },
        {
            Icon: MoneyIcon,
            title: "Qulay narxlar",
            description: "Biz sizga qulay narxlarda talaba bo'lish imkoniyatini taqdim etamiz!"
        }
    ];

    if (!features) features = defaultFeatures;

    return (
        <Container>
            <TwoColumn>
                <ImageColumn>
                    <Image imageSrc={TeamIllustrationSrc}/>
                </ImageColumn>
                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        {/*<Subheading>{subheading}</Subheading>*/}
                        <Heading>{heading}</Heading>
                        <Description>{description}</Description>
                        <Features>
                            {features.map((feature, index) => (
                                <Feature key={index}>
                                    <FeatureIconContainer>{<feature.Icon/>}</FeatureIconContainer>
                                    <FeatureText>
                                        <FeatureHeading>{feature.title}</FeatureHeading>
                                        <FeatureDescription>{feature.description}</FeatureDescription>
                                    </FeatureText>
                                </Feature>
                            ))}
                        </Features>
                        <PrimaryButton>
                            <Link to="call" spy={true} smooth={true} duration={500}>
                                {primaryButtonText}
                            </Link>
                        </PrimaryButton>
                    </TextContent>
                </TextColumn>
            </TwoColumn>
        </Container>
    );
};
