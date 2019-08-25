import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import User from "./user";
import UserPermission from "./user-permission";

@Table
export default class Permission extends Model<Permission> {
    @Column({type: DataType.STRING(200), allowNull: false})
    public name: string;

    @BelongsToMany(() => User, () => UserPermission)
    public users: Array<User & { UserPermission: UserPermission }>;
}
