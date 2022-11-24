import Layout from "../../components/Layout/Layout";
import { ReactElement } from "react";

export default function TwentyTwo() {
  return <></>;
}

TwentyTwo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
