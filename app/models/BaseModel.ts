import type {Knex} from "knex";
import knex from "knex";
import KnexConfig from "@/knexfile";

export interface BaseColumns {
    created_at: Date | string;
    updated_at: Date | string;
    deleted_at: Date | string | null;
}

export default class BaseModel {
    public static table: string;

    public static query<T extends typeof BaseColumns>(): Knex<InstanceType<T>> {
        return knex<InstanceType<T>>(KnexConfig).from(this.table);
    }
}