import React from "react";
import dynamic from "next/dynamic";
import { withAuth } from "@components/Route";
import Loading from "@components/Loading";

const DynamicCheckoutPage = dynamic(() => import("@containers/Checkout"), {
  loading: () => <Loading />,
});

export default withAuth(DynamicCheckoutPage);
