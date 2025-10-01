import {BunRequest} from "bun";
import BaseController from "@/app/controllers/BaseController";
import TestModel, {TestColumns} from "@/app/models/TestModel";

export default class TestController extends BaseController {
    public async get(request: BunRequest): Response {
        const tests = await TestModel.all<TestColumns>();

        return super.response().setData(tests).send();
    }

    public async add(request: BunRequest): Response {
        const body = await super.parse(request);

        const tests = await TestModel.create<TestColumns>({
            name: body.get("name")
        });

        return super.response().setData(tests).send();
    }
}