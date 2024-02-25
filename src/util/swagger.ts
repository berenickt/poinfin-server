import { INestApplication } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

/**
 * @param {INestApplication} app
 * @see https://docs.nestjs.com/openapi/cli-plugin#installation
 * @description Swagger를 설정
 */
export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Poinfin')
    .setDescription('Poinfin의 API 설명서')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api-docs', app, document)
}
