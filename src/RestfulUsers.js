import RestfulDomain from 'restful-domain';

export default class RestfulUsers extends RestfulDomain {
  constructor(options) {
    super(options);
    this.name = this.name || 'user';
    this.collectionName = this.collectionName || 'users';
    this.scrud();
    this.state('get', 'login', ['login']);
    this.state('post', 'login', ['login']);
    this.state('post', 'auth', ['sign','google']);
    this.state('post', 'auth', ['sign','facebook']);
    this.state('post', 'auth', ['sign','twitter']);
  }

  login() {

  }

  google() {

  }

  facebook() {

  }

  twitter() {

  }
}