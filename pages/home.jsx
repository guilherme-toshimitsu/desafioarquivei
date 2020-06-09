import React from "react";
import dynamic from "next/dynamic";
import Loading from "@components/Loading";
import { withAuth } from "@components/Route";

const DynamicHomePage = dynamic(() => import("@containers/Home"), {
  loading: () => <Loading />,
});

export default withAuth(DynamicHomePage);
