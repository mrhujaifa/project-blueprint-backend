import { PrivyClient } from "@privy-io/node";
import { envVars } from "./env";

export const privy = new PrivyClient({
  appId: envVars.PRIVY.PRIVY_APP_ID,
  appSecret: envVars.PRIVY.PRIVY_APP_SECRET,
});
