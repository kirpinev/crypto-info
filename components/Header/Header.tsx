import { FC } from "react";
import { Divider, Flex, Spacer } from "@chakra-ui/react";
import { FaBitcoin } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { GlobalStatistic } from "./GlobalStatistic";
import { HeaderLogo } from "./HeaderLogo";
import { useGlobalStatistic } from "hooks/fetchers";
import { HeaderProps } from "./types";

export const Header: FC<HeaderProps> = ({ initialData }): JSX.Element => {
  const {
    globalStatistic: {
      active_cryptocurrencies,
      markets,
      market_cap_change_percentage_24h_usd,
    },
    isValidating,
  } = useGlobalStatistic(initialData);

  return (
    <>
      <Flex alignItems="center">
        <HeaderLogo />
        <Spacer />
        <GlobalStatistic
          isValidating={isValidating}
          text="Cryptos"
          data={active_cryptocurrencies}
          icon={FaBitcoin}
          label="Total amount of cryptocurrencies"
          iconColor="orange.500"
        />

        <GlobalStatistic
          isValidating={isValidating}
          text="Markets"
          data={markets}
          icon={MdLocalGroceryStore}
          label="Total amount of markets"
          iconColor="purple.500"
        />

        <GlobalStatistic
          isValidating={isValidating}
          text="24h Change"
          data={market_cap_change_percentage_24h_usd}
          icon={FaDollarSign}
          label="Market cap change percentage in USD"
          iconColor="teal.500"
          fixed
        />
      </Flex>
      <Divider />
    </>
  );
};
