import {
  Badge,
  Box,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { server } from "../index";
import { useParams } from "react-router-dom";
import axios from "axios";
import ErrorPage from "./ErrorPage";

const CoinDetails = () => {
  const params = useParams();
  const [coin, setCoin] = useState([]);
  const [loader, setLoader] = useState(true);
  const [urlError, setUrlError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        console.log(data);
        setCoin(data);
        setLoader(false);
      } catch (error) {
        setLoader(false);
        setUrlError(true);
      }
    };
    fetchCoin();
  }, [params.id]);
  if (urlError) return <ErrorPage />;
  return (
    <Container maxW={"container.xl"}>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Box width={"full"} borderWidth={1}>
            aaa
          </Box>
          {/* Button */}
          <RadioGroup value={currency} onChange={setCurrency} p={4}>
            <HStack spacing={4}>
              <Radio value="inr">INR</Radio>
              <Radio value="usd">USD</Radio>
              <Radio value="eur">EUR</Radio>
            </HStack>
          </RadioGroup>
          <VStack spacing={4} alignItems={"flex-start"}>
            <Text fontSize={"small"} alignSelf={"center"} opacity={0.7}>
              Last Updated on{" "}
              {Date(coin.market_data.last_updated).split("G")[0]}
            </Text>
            <Image src={coin.image.large} w={16} h={16} objectFit={"contain"} />
            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coin.market_data.current_price[currency]}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.market_cap_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>
            <Badge fontSize={"2xl"} colorScheme="blue">
              #{coin.market_cap_rank}
            </Badge>
            <PriceBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
              />
              <Box w={"full"} p={4}>
                <DetailItem title={"Max Supply"} value={coin.market_data.max_supply} />
                <DetailItem title={"Circulating Supply"} value={coin.market_data.circulating_supply} />
                <DetailItem title={"Market Capital"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />
                <DetailItem title={"All Time Low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`} />
                <DetailItem title={"All Time High"} value={`${currencySymbol}${coin.market_data.ath[currency]}`} />
              </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};
const PriceBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} width={"full"} colorScheme="teal" />
    <HStack width={"full"} justifyContent={"space-between"}>
      <Badge children={low} colorScheme="red" />
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme="green" />
    </HStack>
  </VStack>
);
const DetailItem = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);
export default CoinDetails;
