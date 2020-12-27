import { HttpRequest, HttpResponse } from '../protocols/http';
import { Controller } from '../protocols/controller';
import { badRequest } from '../helpers/http-helper';
import { MissingParam } from '../errors/missing-param-error';

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = [
      'name',
      'email',
      'password',
      'passwordConfirmation',
    ];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParam(field));
      }
    }

    return {
      statusCode: 200,
      body: 'ok',
    };
  }
}
