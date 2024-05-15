import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "emailは必須です。")
    .email("有効なメールアドレスを入力してください。"),
  password: z
    .string()
    .min(1, "パスワードは必須です。")
    .min(8, "パスワードは８文字以上にしてください。"),
});
