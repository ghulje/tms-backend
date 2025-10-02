import type {Knex} from "knex";
import knex from "knex";
import KnexConfig from "@/knexfile";
import {isEmpty} from "@/utils/utils";

export interface BaseColumns {
    id: bigint;
    created_at: Date | string;
    updated_at: Date | string;
    deleted_at: Date | string | null;
}

export default class BaseModel {
    public static table: string;

    public static query<T extends BaseColumns>(_knex: Knex = null): Knex<T> {
        if (isEmpty(_knex)) return knex<T>(KnexConfig).from(this.table);

        return _knex<T>(this.table);
    }

    public static async all<T extends BaseColumns>(): Promise<Array<T>> {
        return await this.query<T>().select();
    }

    public static async create<T extends BaseColumns>(payload: object): Promise<T> {
        const [row] = await this.query<T>().insert(payload).returning("*");

        return row;
    }
}