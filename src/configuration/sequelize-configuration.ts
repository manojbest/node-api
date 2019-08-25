import * as Config from "config";
import {Application} from "express";
import * as path from "path";
import {Sequelize} from "sequelize-typescript";
import {Configuration} from "../support/decorator/custom-decorator";
import {Logger} from "../util/logger";
import {BaseConfiguration} from "./base-configuration";

@Configuration()
export class SequelizeConfiguration implements BaseConfiguration {
    public apply(app: Application) {
        const sequelize = new Sequelize({
            database: Config.get("db.database"),
            dialect: Config.get("db.dialect"),
            username: Config.get("db.username"),
            password: Config.get("db.password"),
            port: Config.get("db.port"),
            models: [path.resolve(__dirname, "../models")],
        });
        Logger.getLogger().info("Sequelize Configurations completed...");
    }
}
