"use client";

import React, { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements";
import { checkIfUserExists } from "@/utils/supabaseClient";
import { useLocalStorage } from "usehooks-ts";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL!;

export default function HankoAuth() {
  const router = useRouter();

  const [hanko, setHanko] = useState<Hanko>();

  const user = async () => {
    await hanko?.user.getCurrent();
  };

  user().then(console.log).catch(console.error);

  const [, setUserID] = useLocalStorage<string | undefined>(
    "AuthorCraftUserID",
    undefined,
  );

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi)),
    );
  }, []);

  const redirectAfterLogin = useCallback(() => {
    router.replace("/dashboard");
  }, [router]);

  useEffect(
    () =>
      hanko?.onAuthFlowCompleted((authFlowCompletedDetail) => {
        setUserID(`${authFlowCompletedDetail.userID}`);

        checkIfUserExists(authFlowCompletedDetail.userID)
          .then(console.log)
          .catch(console.error);

        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin, setUserID],
  );

  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.error(error);
    });
  }, []);

  return <hanko-auth />;
}
