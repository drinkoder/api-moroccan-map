import {
  Application,
  Router,
  RouterContext,
} from "https://deno.land/x/oak/mod.ts";

import * as flags from "https://deno.land/std/flags/mod.ts";

const { args } = Deno;
const DEFAULT_PORT = 8080;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get("/todos", (ctx: RouterContext) => {
  ctx.response.body = "Hello Drinkoder !!";
});

console.log(`Server is running on port ${port}`);

await app.listen({ port });
