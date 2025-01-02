import { queryDb } from "../db/db-query.js";

export default async function addLogoDataInNavBar({
    format, url, id
}){
    const query = `
        UPDATE companies
        SET modules = jsonb_set(
            COALESCE(modules, '{}'::jsonb),
                '{navigation,logo}',
                COALESCE(
                    modules::jsonb #> '{navigation,logo}',
                    '{}'::jsonb
                ) || '{
                    "format": $1,
                    "url": $2
                }'::jsonb,
                true
        WHERE id = $3;
    `;
    const params = [format, url, id];
    try {
        const result = await queryDb(query, params, false);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}