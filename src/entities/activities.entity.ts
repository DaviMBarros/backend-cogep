import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";

@Entity("activities")
export default class Activity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45 })
    name: string;
    
    @Column({ length: 300 })
    description: string;

    @Column({ type: "date" })
    startDate: string;

    @Column({ type: "date" })
    endDate: string;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @ManyToOne(() => User, (user) => user.activities, { onDelete: "CASCADE" })
    user: User
};