import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPositions } from "../position.slice";

import data from '../../../mock/data.json'

export const useFetchPositions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPositions(data));
  }, []);
};
