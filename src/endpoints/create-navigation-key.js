import { queryDb } from "../db/db-query.js";

export default async function createNavigationKey({
    id
}){
    const query = `
        UPDATE companies
        SET modules = jsonb_set(
            modules,
            '{navigation}',
            '{
                "component": "",
                "customize": "",
                "logo": {},
                "content": []
            }'::jsonb,
            true
        )
        WHERE modules::jsonb -> 'navigation' IS NULL
            AND id = $1
        ;
    `;
    const params = [id];
    try {
        const result = await queryDb(query, params, false);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}