import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Blogs extends BaseSchema {
  protected tableName = 'blogs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title').notNullable()
      table.string('slug').notNullable()
      table.string('image').notNullable()
      table.string('content').notNullable()
      table.string('author').notNullable()
      table.string('category').notNullable()
      table.string('tags').notNullable()
      table.string('status').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
