import { serve } from "inngest/next";
import { inngest } from "@/config/inngest";
import { syncCreation } from "@/config/inngest";
import { syncUserUpdate } from "@/config/inngest";
import { syncUserDelete } from "@/config/inngest";
// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncCreation,
    syncUserUpdate,
    syncUserDelete

  ],
});
