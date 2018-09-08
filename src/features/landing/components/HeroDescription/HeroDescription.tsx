import React from "react";
import styled from "styled";

import { Typography } from "components/Typography";
import { ContentCenterWrapper } from "componentsV0/ContentCenterWrapper";

export type HeroDescriptionProps = {};

export const HeroDescription = () => (
  <DescriptionWrapper>
    <ContentCenterWrapper style={{ textAlign: "center" }}>
      <Typography variant="H5" component="h3" style={{ marginBottom: 24 }}>
        What is &nbsp;Join Uniform?
      </Typography>

      <Typography
        variant="H6"
        component="p"
        paragraph
        style={{ color: "#a4a4a4", fontSize: 16, lineHeight: "1.6rem" }}
      >
        JoinUniform is created to help and prepare those aspirants(both Officer
        and Jawan entry) who are keen to serve India, in uniform(Army, Airforce,
        Navy, Assam Rifles, Coast Guard, TA, BSF, ITBP, CRPF, SSB, CISF &
        RPF.etc.). The platform is bilingual(Hindi & English),user can use it
        from anywhere, using mobile, laptop or TV. JoinUniform will benefit it's
        user in terms of quality content, proper attention, actual exam like
        tests, with explanation and performance analysis.
      </Typography>

      <Typography
        variant="Body1"
        component="p"
        paragraph
        style={{ color: "#a4a4a4", fontSize: 16, lineHeight: "1.6rem" }}
      >
        JoinUniform उन उम्मीदवारों (अधिकारी और जवान दोनों एंट्री) की मदद और
        तैयारी करने के लिए बनाया गया है जो वर्दी (सेना, वायु सेना, नौसेना, असम
        राइफल्स, कोस्ट गार्ड, टीए, बीएसएफ, आईटीबीपी, सीआरपीएफ, एसएसबी, सीआईएसएफ
        और आरपीऍफ़ आदि )में देशसेवा के इच्छुक हैं । मंच द्विभाषी (हिंदी और
        अंग्रेजी) है, उपयोगकर्ता इसे मोबाइल, लैपटॉप या टीवी का उपयोग करके कहीं
        भी इस्तेमाल कर सकते हैं। JoinUniform गुणवत्ता सामग्री, उचित ध्यान,
        परीक्षण जैसे वास्तविक परीक्षा, स्पष्टीकरण और प्रदर्शन विश्लेषण के संदर्भ
        में इसके उपयोगकर्ता को लाभान्वित करेगा।
      </Typography>
    </ContentCenterWrapper>
  </DescriptionWrapper>
);

const DescriptionWrapper = styled.div`
  width: 100%;
  padding: 24px 0;
  background-color: #161616;
`;
