import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { getComics } from "dh-marvel/services/marvel/marvel.service";
import Card from "dh-marvel/components/common/Card";

interface Props {
	comics: {
    data: {
      results: []
    }
  };
}

const Index: NextPage<Props> = ({comics}) => {
  const comicsList = comics.data.results;
  

  return (
    <>
      <Head>
        <title>Marvel Comics</title>
        <meta name="description" content="Tienda de comics de Marvel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle title={"Marvel Comics"}>
      {comicsList.map((item) => (
						<Card comic={item} />
					))}
      </BodySingle>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const comics = await getComics(0, 12);

  return {
    props: {
      comics,
    },
  };
};

export default Index;
