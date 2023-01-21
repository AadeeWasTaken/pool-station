import { error } from "@sveltejs/kit";
import databaseData from "../database/data.json";
import type { PageServerLoad } from "./$types";

interface Data {
    id: number;
    location: string;
    population: number;
    cost: number;
    interested: number;
    invested: number;
}

interface Pool {
    id: number;
    location: string;
    cost: number;
    interested: number;
    invested: number;
}

export const load = (async () => {
    const data: Data[] = databaseData;

    const pools: Pool[] = data.map((d: Data) => {
        return {
            id: d.id,
            location: d.location,
            cost: d.cost,
            interested: d.interested,
            invested: d.invested
        };
    });

    if (pools) return pools;

    throw error(404, "Not Found");
}) satisfies PageServerLoad;