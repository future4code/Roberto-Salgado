import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from '../actions/goToPages'

export const useProtectPage = (parameter) => {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    token ? parameter() : goToLoginPage(history)
  }, [history, parameter]);
};
