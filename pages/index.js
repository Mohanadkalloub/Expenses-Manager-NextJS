import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import PageImage from "../img/m1.png";
import Form from "@/components/Form";
import Tabel from "@/components/Table";
export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Expenses Manager</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"
        />
        {/* <link rel='stylesheet' href='css/custom.css' /> */}
      </Head>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <Image src={PageImage} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-6 mt-5">
            <div className="row tit">
              <h4 className="">Wellcom to Mohanad Expense Manager</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <Form />
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="custom-card ">
            <Tabel />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
