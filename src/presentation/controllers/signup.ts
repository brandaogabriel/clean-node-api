import { HttpRequest, HttpResponse } from '../protocols/http';
import { Controller } from '../protocols/controller';
import { badRequest } from '../helpers/http-helper';
import { MissingParamError } from '../errors/missing-param-error';
import { InvalidParamError } from '../errors/invalid-param-error';
import { EmailValidator } from '../protocols/email-validator';

export class SignUpController implements Controller {
  private readonly emailValidor: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidor = emailValidator;
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = [
      'name',
      'email',
      'password',
      'passwordConfirmation',
    ];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const isValidEmail = this.emailValidor.isValid(httpRequest.body.email);

    if (!isValidEmail) {
      return badRequest(new InvalidParamError('email'));
    }

    return {
      statusCode: 200,
      body: 'ok',
    };
  }
}
