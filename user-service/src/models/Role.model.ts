import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

export interface IRoles {
    id: number
    name: string
}

@Table({
    tableName: "Roles",
    timestamps: false
})
export default class Roles extends Model implements IRoles {

    @AutoIncrement
    @PrimaryKey
    @Column
    id!: number

    @Column
    name!: string
}