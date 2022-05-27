import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { colors } from "../components/colors";
import { Container } from "../components/shared";

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`;

import logo1 from "./../assets/cards/mc.png"
import logo2 from "./../assets/cards/visa_white.png"
import CardSection from "../components/Cards/CardSection";

const Home: FunctionComponent = () => {
    const cardsData = [
        {
            id: 1,
            accountNo: "4252425412341341",
            balance: 20000.15,
            alias: "Work Debit",
            logo: logo1,
        },
        {
            id: 2,
            accountNo: "4252425412341341",
            balance: 20000.15,
            alias: "Work Debit",
            logo: logo2,
        },
        {
            id: 3,
            accountNo: "4252425412341341",
            balance: 20000.15,
            alias: "Work Debit",
            logo: logo1,
        },
        {
            id: 4,
            accountNo: "4252425412341341",
            balance: 20000.15,
            alias: "Work Debit",
            logo: logo2,
        },
        {
            id: 5,
            accountNo: "4252425412341341",
            balance: 20000.15,
            alias: "Work Debit",
            logo: logo1,
        },
    ];

    return (
        <HomeContainer>
            <StatusBar style="dark" />
            <CardSection data={cardsData} />
        </HomeContainer>
    );
};

export default Home;