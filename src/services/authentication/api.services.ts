import { UserDto } from "../../types/user.dto";
import api from "../axios.config";
import { loginInputs } from "../../types/loginInputs";
import { ResponseLogin } from "../../types/auth";

export const createUser = async (data: UserDto) => {
  try {
    const response = await api.post("api/user", data);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (
  data: loginInputs
): Promise<ResponseLogin | void> => {
  try {
    const response = await api.post("api/login", data);

    return response.data;
  } catch (error) {
    return;
  }
};

export const recoverPassword = async (email: string) => {
  try {
    const response = await api.post("/api/change-password", { email });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const changePassword = async (
  password: string,
  passwordConfirm: string,
  token: string
) => {
  try {
    const response = await api.post(`/api/alter-password/${token}`, {
      password,
      passwordConfirm,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const activateAccount = async (url: string) => {
  try {
    const response = await api.get(`/api/${url}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
