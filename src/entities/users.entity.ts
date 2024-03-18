import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Activities from "./activities.entity";

@Entity("users")
export default class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45 })
    name: string;
    
    @Column({ length: 15 })
    phone: string;

    @Column({ length: 45, unique: true })
    email: string;

    
    @Column({ length: 200 })
    adress: string;
    
    @Column({ length: 120 })
    password: string;

    @Column({ default: false })
    admin: boolean;

    @OneToMany(() => Activities, (activities) => activities.user)
    activities: Array<Activities>

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const hashRounds: number = getRounds(this.password)
        if(!hashRounds) {
            this.password = hashSync(this.password, 10)
        }
    }
};