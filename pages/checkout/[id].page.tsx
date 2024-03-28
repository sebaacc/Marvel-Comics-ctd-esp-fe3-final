import CheckoutForm from "dh-marvel/components/Form/CheckoutForm";
import { ComicProps } from "dh-marvel/components/common/CardM";
import CheckoutComicCard from "dh-marvel/components/common/CheckoutComicCard";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps, NextPage } from "next";

const CheckoutPage: NextPage<ComicProps> = ({ comic }) => {
  return (
    <>
      <CheckoutComicCard comic={comic} />
      {<CheckoutForm />}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const idComic = Number(id);

  const comic = await getComic(idComic);

  return {
    props: {
      comic,
    },
  };
};

export default CheckoutPage;
