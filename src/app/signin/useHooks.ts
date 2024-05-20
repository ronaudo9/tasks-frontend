import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInSchema } from "../Utils/validationSchema";
import { useMutation } from "@apollo/client";
import { SignInResponse } from "@/types/signInResponse";
import { SIGN_IN } from "@/mutations/authMutations";
type Login = {
  email: string;
  password: string;
};
export const useHooks = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    mode: "onChange",
    resolver: zodResolver(signInSchema),
  });
  const [signIn] = useMutation<SignInResponse>(SIGN_IN);

  const onSubmit = async (data: Login) => {
    try {
      const result = await signIn({ variables: { signInInput: data } });
    } catch (err: unknown) {
      console.error(err);
    }
  };
  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};
