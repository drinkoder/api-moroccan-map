import {
  Application,
  Router,
  RouterContext,
} from "https://deno.land/x/oak/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";
import { fetchAllData } from "./routes.ts";

const { args } = Deno;
const DEFAULT_PORT = 8080;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router
  .get("/", (ctx: RouterContext) => {
    ctx.response.body = `
        Welcome to the API Moroccan Map
            /data   :   get all map json (regions/sub_regions/divisions/sub_divisions) 
 `;
  })
  .get("/data", fetchAllData);

console.log(`Server is running on port ${port}`);

await app.listen({ port });
