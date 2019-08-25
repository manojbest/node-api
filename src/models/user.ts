import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import Permission from "./permission";
import UserPermission from "./user-permission";

@Table
export default class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    })
    public email: string;

    @Column({type: DataType.STRING, allowNull: false})
    public firstName: string;

    @Column({type: DataType.STRING, allowNull: false})
    public lastName: string;

    @Column({type: DataType.STRING, allowNull: false})
    public password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            not: ["[a-z]", "i"],
        },
    })
    public mobile: string;

    @Column({type: DataType.STRING, allowNull: false})
    public NIC: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    public nicPermissionType: number;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    public isMerchantUser: boolean;

    @Column({type: DataType.INTEGER, allowNull: true})
    public merchantId: number;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    public hasAllPermissions: boolean;

    @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: true})
    public isActive: boolean;

    @BelongsToMany(() => Permission, () => UserPermission)
    public permissions: Array<Permission & {UserPermission: UserPermission}>;
}
