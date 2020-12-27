import { HttpRequest, HttpResponse } from '../protocols/http';
import { badRequest } from '../helpers/http-helper';
import MissiginParam from '../errors/missing-param-error';

export default class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password'];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissiginParam(field));
      }
    }
  }
}
