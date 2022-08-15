import Head from "next/head";
import Navbar from "../components/navbar";
import ProductCard from "../components/product-card";
import ProductPage from "../components/product-list";
import Slide from "../components/slide";

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
      <div className="bg-gray-100">

      <Navbar />
      <Slide />
      <ProductPage />
      </div>
    </div>
  );
}
