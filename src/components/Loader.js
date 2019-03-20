import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const Loader = ({ loading }) => (
    <ClipLoader
        css={override}
        sizeUnit={"px"}
        size={150}
        color={"#a99e7e"}
        loading={loading}
    />
);
export default Loader;
