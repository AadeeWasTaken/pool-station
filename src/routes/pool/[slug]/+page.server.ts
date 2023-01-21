import { error } from "@sveltejs/kit";
import databaseData from "../../../database/data.json";
import type { PageServerLoad } from "./$types";
import type { Data } from "../../../types/data";

export const load = (async ({ params }: { params: { slug: string; }; }) => {
    const data: Data[] = databaseData;
    const poolData: Data | undefined = data.find(d => d.id === Number(params.slug));

    if (poolData) return poolData;
    throw error(404, "Not Found");
}) satisfies PageServerLoad;