import knex from "knex";
import {Model} from "objection";
import ModelNotFoundException from "@/app/exceptions/ModelNotFoundException";
import KnexConfig from "@/knexfile";

// @ts-ignore
global.ModelNotFoundException = ModelNotFoundException;

Model.knex(knex(KnexConfig));