import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import Lottery from "./lottery";

@Table
export default class LotteryField extends Model<LotteryField> {
    @Column({type: DataType.STRING(200), allowNull: false})
    public name: string;

    @Column({type: DataType.INTEGER, allowNull: true})
    public formatType: number;

    @Column({type: DataType.STRING(200), allowNull: false})
    public values: string;

    @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: true})
    public isSpecialField: boolean;

    @Column({type: DataType.STRING(200), allowNull: true})
    public specialFieldValue: string;

    @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
    public isArchived: boolean;

    @ForeignKey(() => Lottery)
    @Column
    public lotteryId: number;

    @BelongsTo(() => Lottery)
    public lottery: Lottery;
}
