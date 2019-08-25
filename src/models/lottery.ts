import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import Draw from "./draw";
import LotteryField from "./lottery-field";
import SmsTemplate from "./sms-template";

@Table
export default class Lottery extends Model<Lottery> {
    @Column({type: DataType.STRING(200), allowNull: false})
    public name: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    public totalFields: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    public bonusFields: number;

    @Column({type: DataType.STRING(100), allowNull: true})
    public mainImage: string;

    @Column({type: DataType.STRING(100), allowNull: true})
    public mobileImage: string;

    @Column({type: DataType.FLOAT, allowNull: true})
    public buyingPrice: number;

    @Column({type: DataType.FLOAT, allowNull: true})
    public ticketPrice: number;

    @Column({type: DataType.STRING(100), allowNull: true})
    public validityDays: string;

    @Column({type: DataType.STRING(100), allowNull: true})
    public appId: string;

    @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
    public isActive: boolean;

    @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
    public isArchived: boolean;

    @HasMany(() => LotteryField)
    public lotteryFields: LotteryField[];

    @HasMany(() => Draw)
    public draws: Draw[];

    @HasMany(() => SmsTemplate)
    public smsTemplates: SmsTemplate[];
}
