import BaseModel, {BaseColumns} from "@/app/models/BaseModel";

export interface TestColumns extends BaseColumns {
    name: string;
}

export default class TestModel extends BaseModel {
    public static table: string = "tests";
}