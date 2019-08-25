import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import Lottery from "./lottery";

@Table({
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
})
export default class SmsTemplate extends Model<SmsTemplate> {
    @Column({type: DataType.STRING(200), allowNull: true})
    public name: string;

    @Column({type: DataType.STRING(400), allowNull: true})
    public si: string;

    @Column({type: DataType.STRING(400), allowNull: true})
    public ta: string;

    @Column({type: DataType.STRING(400), allowNull: true})
    public en: string;

    @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
    public isArchived: boolean;

    @ForeignKey(() => Lottery)
    @Column
    public lotteryId: number;

    @BelongsTo(() => Lottery)
    public lottery: Lottery;
}
