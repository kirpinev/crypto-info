import { FC } from "react";
import { Divider, GridItem } from "@chakra-ui/react";
import { FaBitcoin } from "react-icons/fa";
import { RiPercentFill } from "react-icons/ri";
import { MdLocalGroceryStore } from "react-icons/md";
import { useGlobalStatistic } from "hooks/fetchers";
import { GlobalStatistic } from "./GlobalStatistic";
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
      <GridItem colSpan={2}>
        <GlobalStatistic
          isValidating={isValidating}
          text="Cryptos"
          data={active_cryptocurrencies}
          icon={FaBitcoin}
          label="Total amount of cryptocurrencies"
          iconColor="orange.500"
        />
      </GridItem>
      <GridItem colSpan={2}>
        <GlobalStatistic
          isValidating={isValidating}
          text="Markets"
          data={markets}
          icon={MdLocalGroceryStore}
          label="Total amount of markets"
          iconColor="purple.500"
        />
      </GridItem>
      <GridItem colSpan={2}>
        <GlobalStatistic
          isValidating={isValidating}
          text="24h Change"
          data={market_cap_change_percentage_24h_usd}
          icon={RiPercentFill}
          label="Market cap change percentage in USD"
          iconColor="teal.500"
          fixed
        />
      </GridItem>
      <GridItem colSpan={12}>
        <Divider />
      </GridItem>
    </>
  );
};
