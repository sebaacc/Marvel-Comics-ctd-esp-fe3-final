import { NextPage } from "next";
import { useRouter } from "next/router";

const Character: NextPage = () => {
  const { query } = useRouter();
  return <div>Character page. El id del personaje es: {query.id} </div>;
};

export default Character;