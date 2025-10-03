import {JSONSchema} from "objection";
import BaseModel, {BaseColumns} from "@/app/models/BaseModel";

export interface TestColumns extends BaseColumns {
    name: string;
}

export default class TestModel extends BaseModel implements TestColumns {
    public static tableName: string = "tests";
    public static idColumn: string = "id";

    declare id: bigint;
    declare name: string;
    declare created_at: Date | string;
    declare updated_at: Date | string;
    declare deleted_at: Date | string | null;

    public static jsonSchema: JSONSchema = {
        type: "object",
        required: [
            "name"
        ],
        properties: {
            name: {
                type: "string",
                minLength: 5
            }
        }
    };
}