import React, { useEffect, useState } from "react";
import { server } from "../index";
import axios from "axios";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import ExchangeCard from "./ExchangeCard";
const Exchanges = () => {
  const [exchangeData, setExchangeData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [urlError, setUrlError] = useState(false);
  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchangeData(data);
        setLoader(false);
      } catch (error) {
        setLoader(false);
        setUrlError(true);
      }
    };
    fetchExchange();
  }, []);
  return (
    <Container maxW={"container.xl"}>
      {loader ? (
        <Loader />
      ) : // Braket needed
      urlError ? (
        <ErrorPage />
      ) : (
        <>
          <HStack wrap={"wrap"} justify={"space-evenly"}>
            {exchangeData.map((i) => (
              <div>
                <ExchangeCard
                  name={i.name}
                  image={i.image}
                  url={i.url}
                  rank={i.trust_score_rank}
                />
              </div>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};
export default Exchanges;
