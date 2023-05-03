import {Connection, QueryResult} from '@mikro-orm/core';

/*

export class NeonDriver extends Connection {
    constructor(protected readonly config: any) {
        super();
    }
    // implement abstract methods
    connect(): Promise<void> {
        new Pool({ connectionString: this.config.DATABASE_URL });
    }
    isConnected(): Promise<boolean> {

    }
    close(force?: boolean): Promise<void> {

    }
    getDefaultClientUrl(): string {

    }
    execute(query: string, params?: any[], method?: 'all' | 'get' | 'run'): Promise<QueryResult | any | any[]> {

    }
}

import {AbstractSqlDriver, PostgreSqlDriver, PostgreSqlPlatform} from "@mikro-orm/postgresql";
import {PostgreSqlConnection} from "@mikro-orm/postgresql/PostgreSqlConnection";
import {Pool} from "@neondatabase/serverless";

export class NeonPostgresDriver extends AbstractSqlDriver {

    // initialize connection and platform
    protected readonly connection = (new NeonDriver(this.config)) as unknown as PostgreSqlConnection;

    constructor(config: any) {
        super(config, new PostgreSqlPlatform(), PostgreSqlConnection, ['knex']);
    }
}*/
