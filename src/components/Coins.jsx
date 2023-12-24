import React, { useEffect, useState } from "react";
import { server } from "../index";
import axios from "axios";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import CoinCard from "./CoinCard";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loader, setLoader] = useState(true);
  const [urlError, setUrlError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoader(false);
      } catch (error) {
        setLoader(false);
        setUrlError(true);
      }
    };
    fetchCoin();
  }, [currency, page]);
  const changePage = (index) => {
    setPage(index);
    setLoader(true);
  };
  const pageButtons = new Array(132).fill(1);
  return (
    <Container maxW={"container.xl"}>
      {loader ? (
        <Loader />
      ) : // Braket needed
      urlError ? (
        <ErrorPage />
      ) : (
        <>
          <HStack wrap={"wrap"} justify={"center"}>
            <RadioGroup value={currency} onChange={setCurrency} p={4} w={"full"}>
              <HStack spacing={4}>
                <Radio value="inr">INR</Radio>
                <Radio value="usd">USD</Radio>
                <Radio value="eur">EUR</Radio>
              </HStack>
            </RadioGroup>
            {coins.map((i) => (
              <div>
                <CoinCard
                  id={i.id}
                  price={i.current_price}
                  name={i.name}
                  image={i.image}
                  symbol={i.symbol}
                  currencySymbol={currencySymbol}
                />
              </div>
            ))}
          </HStack>
          <HStack spacing={4} p={8} w={"full"} overflowX={"auto"}>
            {pageButtons.map((item, index) => (
              <Button
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}>
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};
export default Coins;
