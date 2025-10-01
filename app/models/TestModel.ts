import type {Knex} from "knex";
import BaseModel, {BaseColumns} from "@/app/models/BaseModel";
import {isEmpty} from "@/utils/utils";

interface TestColumns extends BaseColumns {
    id: bigint;
    name: string;
}

export default class TestModel extends BaseModel {
    public static table: string = "tests";

    public static query(_knex: Knex = null) {
        if (isEmpty(_knex)) return super.query<TestColumns>();

        return _knex<TestColumns>(this.table);
    }
}