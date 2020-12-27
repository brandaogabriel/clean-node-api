import { HttpRequest, HttpResponse } from '../protocols/http';
import { badRequest } from '../helpers/http-helper';
import MissiginParam from '../errors/missing-param-error';

export default class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissiginParam('name'));
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissiginParam('email'));
    }
  }
}
