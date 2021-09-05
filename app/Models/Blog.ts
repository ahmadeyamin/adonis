import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Blog extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public author: string

  @column()
  public category: string

  @column()
  public tags: string

  @column()
  public image: string

  @column()
  public slug: string

  @column()
  public status: string
}
