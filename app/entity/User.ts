/* app/entity/user.ts */

import {Column, Entity, CreateDateColumn, PrimaryColumn, UpdateDateColumn} from 'typeorm';

@Entity({ name: 'users', synchronize: false})
export class User {

    @PrimaryColumn('bigint')
    // @Generated('increment')
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    username?: string;

    @Column({unique: true})
    email?: string;

    @Column()
    password: string;

    @CreateDateColumn({name: 'created_at'})
    createTime: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updateTime: Date;

}