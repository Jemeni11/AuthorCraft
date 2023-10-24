import React, { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";
import LogoutButton from "./LogoutButton";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL!;

export default function HankoProfile() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);

  return (
    <>
      <hanko-profile />
      <LogoutButton />
    </>
  );
}
