import * as Config from "config";
import {Application} from "express";
import {Sequelize} from "sequelize-typescript";
import Draw from "../models/draw";
import Lottery from "../models/lottery";
import LotteryField from "../models/lottery-field";
import Permission from "../models/permission";
import SmsTemplate from "../models/sms-template";
import User from "../models/user";
import UserPermission from "../models/user-permission";
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
            models: [
                Draw,
                Lottery,
                LotteryField,
                Permission,
                SmsTemplate,
                User,
                UserPermission,
            ],
        });
        Logger.getLogger().info("Sequelize Configurations completed...");
    }
}
