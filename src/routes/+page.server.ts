import { error } from "@sveltejs/kit";
import databaseData from "../database/data.json";
import type { PageServerLoad } from "./$types";
import type { Data, Pool } from "../types/data";

export const load = (async () => {
    const data: Data[] = databaseData;

    const pools: Pool[] = data.map((d: Data) => {
        return {
            id: d.id,
            location: d.location,
            image: d.image,
            cost: d.cost,
            interested: d.interested,
            invested: d.invested
        };
    });

    if (pools) return { pools: pools };
    throw error(404, "Not Found");
}) satisfies PageServerLoad;