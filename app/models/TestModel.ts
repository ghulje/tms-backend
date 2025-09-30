import knex from "knex";
import BaseModel, {BaseColumns} from "@/app/models/BaseModel";

interface TestColumns extends BaseColumns {
    id: bigint;
    name: string;
}

export default class TestModel extends BaseModel {
    public static table: string = "tests";

    public static getInstance() {
        return knex<TestColumns>(this.table);
    }
}