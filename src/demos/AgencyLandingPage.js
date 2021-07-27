import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import {css} from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import {Element} from "react-scroll"
import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

export default () => (
    <AnimationRevealPage>

        <Hero/>

        <Element name="aboutUs" className="element">
            <MainFeature/>
        </Element>
        <Element name="univer" className="universities">
            <Features/>
        </Element>
        <Element name="team" className="element">
            <MainFeature2/>
        </Element>

        {/*<Portfolio />*/}
        <FAQ
            imageSrc={customerSupportIllustrationSrc}
            imageContain={true}
            imageShadow={false}
            heading={
                <>
                    Eng ko'p so'raladigan <span tw="text-primary-500"> Savollar</span>
                </>
            }
        />
        {/*<Blog/>*/}
        <Element name="call" className="element">
            <ContactUsForm/>
        </Element>
        <Footer/>
        {/*<script src="https://apps.elfsight.com/p/platform.js" defer></script>*/}
        <div className="elfsight-app-396d0cf8-b4e0-4920-891a-732ad4605bef"></div>
    </AnimationRevealPage>
);
