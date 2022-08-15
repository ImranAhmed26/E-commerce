import Head from "next/head";
import Navbar from "../components/navbar";
import ProductPage from "../components/productPages";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Best Ecom</title>
        <meta
          name="description"
          content="Avenir IP Ltd. | One of the promising and fastest growing IT company in Bangladesh with the vision to develop cutting edge web and smartphone applications."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ProductPage />
    </div>
  );
}
