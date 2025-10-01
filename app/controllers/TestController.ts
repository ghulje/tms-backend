import {BunRequest} from "bun";
import BaseController from "@/app/controllers/BaseController";
import TestModel from "@/app/models/TestModel";
import Response from "@/utils/Response";

export default class TestController extends BaseController {
    public async get(request: BunRequest) {
        const tests = await TestModel.query().select();

        return new Response().setData(tests).send();
    }

    public async add(request: BunRequest) {
        const body = await super.parse(request);

        // const tests = await TestModel.query().select();

        return new Response().setData(body).send();
    }
}