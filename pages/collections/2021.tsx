import Layout from "../../components/Layout/Layout";
import { ReactElement } from "react";

export default function TwentyOne() {
  return <></>;
}

TwentyOne.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
