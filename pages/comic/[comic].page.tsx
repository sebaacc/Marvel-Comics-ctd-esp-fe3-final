import { NextPage } from "next";
import { useRouter } from "next/router";

const Comic:NextPage = () => {
    const { query } = useRouter();
    return (
        <div>Comic page. El id del COMIC es: {query.comic} </div>
    );
}

export default Comic;