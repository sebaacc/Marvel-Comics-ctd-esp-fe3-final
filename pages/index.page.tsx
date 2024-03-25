import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import ComicsGrid, { Props } from "dh-marvel/components/ComicsGrid/ComicsGrid";
import { getComics } from "dh-marvel/services/marvel/marvel.service";

const Index: NextPage<Props> = ({ comics }) => {
  return (
    <>
      <Head>
        <title>Marvel Comics</title>
        <meta name="description" content="Tienda de comics de Marvel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle title={"Marvel Comics"}>
        <ComicsGrid comics={comics} />
      </BodySingle>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const comics = await getComics(0, 96);

  return {
    props: {
      comics,
    },
  };
};

export default Index;
