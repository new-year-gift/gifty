import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { actions as codeActions } from "../store/code/code.slice";
import * as cActions from "../store/code/code.action";

const rootActions = {
    ...codeActions,
    ...cActions
};

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};