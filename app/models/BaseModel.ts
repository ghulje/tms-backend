export interface BaseColumns {
    created_at: Date | string;
    updated_at: Date | string;
    deleted_at: Date | string | null;
}

export default class BaseModel {
    public static table: string;
}