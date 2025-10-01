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

    public static query<T extends typeof BaseColumns>(_knex: Knex = null): Knex<InstanceType<T>> {
        if (isEmpty(_knex)) return knex<InstanceType<T>>(KnexConfig).from(this.table);

        return _knex<InstanceType<T>>(this.table);
    }

    public static async all<T extends typeof BaseColumns>(payload: object): Array<InstanceType<T>> {
        return await this.query<T>().select();
    }

    public static async create<T extends typeof BaseColumns>(payload: object): InstanceType<T> {
        const [row] = await this.query<T>().insert(payload).returning("*");

        return row;
    }
}