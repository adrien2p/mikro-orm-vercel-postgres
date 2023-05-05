import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Test {
    @PrimaryKey({ type: "numeric"})
    id!: number

    @Property({ type: 'text' })
    title!: string;
}