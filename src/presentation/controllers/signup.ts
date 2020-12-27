import MissingParam from '../errors/missing-param-error';
import { HttpRequest, HttpResponse } from '../protocols/http';
import MissiginParam from '../errors/missing-param-error';

export default class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissiginParam('name'),
      };
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissiginParam('email'),
      };
    }
  }
}
