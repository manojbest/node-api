import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import Lottery from "./lottery";

@Table
export default class Draw extends Model {
    @Column({type: DataType.INTEGER, allowNull: true})
    public drawDay: number;

    @Column({type: DataType.STRING(10), allowNull: true})
    public salesStartOn: string;

    @Column({type: DataType.STRING(10), allowNull: true})
    public salesEndOn: string;

    @Column({type: DataType.INTEGER, allowNull: true})
    public drawTime: number;

    @Column({type: DataType.STRING(10), allowNull: true})
    public returnOn: string;

    @Column({type: DataType.DATEONLY, allowNull: true})
    public firstIssueDate: Date;

    @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
    public isArchived: boolean;

    @ForeignKey(() => Lottery)
    @Column
    public lotteryId: number;

    @BelongsTo(() => Lottery)
    public lottery: Lottery;
}
