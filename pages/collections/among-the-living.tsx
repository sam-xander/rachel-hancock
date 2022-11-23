import Layout from "../../components/Layout/Layout";
import { ReactElement } from "react";

export default function AmongTheLiving() {
  return <></>;
}

AmongTheLiving.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
