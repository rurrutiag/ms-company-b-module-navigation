import { queryDb } from "../db/db-query.js";

export default async function customizeLogoInNavBar({
    customize, id
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
                    "customize": $1
                }'::jsonb,
                true
        WHERE id = $2
    `;
    const params = [customize, id];
    try {
        const result = await queryDb(query, params, false);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}