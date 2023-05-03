import { Migration } from '@mikro-orm/migrations';

export class Migration20191019195930 extends Migration {
    constructor() {
        // @ts-ignore
        super(...arguments);
    }

    async up(): Promise<void> {
        console.log("test")
        this.addSql('CREATE TABLE "test" ("id" serial primary key, "title" text not null);');
    }

    async down(): Promise<void> {
        this.addSql('DROP TABLE "test";');
    }

}