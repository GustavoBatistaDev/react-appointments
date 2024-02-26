import { UserDto } from "./user.dto";

export type Props = {
  handleRedirect: (path: string) => void;
};

export type ResponseLogin = {
  user: UserDto;
  token: string;
};
