import { GetServerSideProps } from "next";
import { PageGrid } from "components/PageGrid";
import { Header } from "components/Header";
import { getGlobalStatistic } from "api";

const Home = (props): JSX.Element => (
  <PageGrid>
    <Header initialData={props.data} />
  </PageGrid>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getGlobalStatistic();

  return {
    props: {
      data,
    },
  };
};
