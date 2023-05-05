import {Generated} from "kysely";

export interface TestTable {
    id: Generated<number>
}

export interface Database {
    test: TestTable
}