import { useMutation } from "@tanstack/react-query";
import { Fetcher } from "../fetcher";
import { User } from "@withpark/types/user";

interface PostLoginRequest {
  socialType: string;
  accessToken: string;
}

interface PostLoginResponse {
  jwt: string;
  user: User;
}

const postLogin = ({ socialType, accessToken }: PostLoginRequest) =>
  Fetcher.get<PostLoginResponse>(
    `auth/${socialType}/callback?access_token=${accessToken}`
  );

const useLoginMutation = () =>
  useMutation({
    mutationFn: ({ socialType, accessToken }: PostLoginRequest) =>
      postLogin({ socialType, accessToken }),
  });

export default useLoginMutation;
