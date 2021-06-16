import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import Product from "../components/Product";

export default function Home({ productData }) {
  const [pageCount, setPageCount] = useState(200);
  const [pagedProduct, setPagedProduct] = useState([]);

  const handlePageClick = async (data) => {
    const pagedPrd = await fetchApi(data.selected + 1);
    setPagedProduct(pagedPrd.data);
  };

  return (
    <div>
      <Head>
        <title>AM Shop</title>
        <meta name="description" content="AM Shop" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">AM Ecommerce</h1>
            <p className="lead fw-normal">
              Jumpstart your shopping experience with extreme fast delivery and
              exciting discoutns.
            </p>
            <a className="btn btn-outline-secondary" href="#product-container">
              Explore
            </a>
          </div>
          <div
            className={`${styles.productDevice} shadow-sm d-none d-md-block`}
          ></div>
          <div
            className={`${styles.productDevice} ${styles.productDevice2} shadow-sm d-none d-md-block`}
          ></div>
        </div>

        <div className="container" id="product-container">
          <div className="row d-flex justify-content-center flex-wrap">
            {pagedProduct.length > 0
              ? pagedProduct.map((product, index) =>
                  product ? (
                    <Product key={index} product={product}></Product>
                  ) : (
                    `loading`
                  )
                )
              : productData.map((product, index) =>
                  product ? (
                    <Product key={index} product={product}></Product>
                  ) : (
                    `loading`
                  )
                )}
          </div>

          <div className="row">
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination d-flex justify-content-center"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

const fetchApi = async (selectedPage) => {
  return fetch(
    `https://api.airmoll.com/api/v1/products?take=9&page=${selectedPage || 1}`
  ).then((res) => res.json());
};

export async function getStaticProps() {
  const prd = await fetchApi();
  return {
    props: { productData: prd.data }, // will be passed to the page component as props
  };
}
