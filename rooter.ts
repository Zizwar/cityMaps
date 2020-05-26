import { Router } from "https://deno.land/x/oak/mod.ts";

import { latlng, address, lists } from "./services/maps.ts";

const router = new Router();

router.get("/maps/latlng/:id", latlng);
router.get("/maps/address/:language/:address", address);
router.post("/maps/lists", lists);

export default router;