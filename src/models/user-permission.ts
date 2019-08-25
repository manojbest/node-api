import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import Permission from "./permission";
import User from "./user";

@Table
export default class UserPermission extends Model<UserPermission> {
    @ForeignKey(() => User)
    @Column
    public userId: number;

    @ForeignKey(() => Permission)
    @Column
    public permissionId: number;
}
