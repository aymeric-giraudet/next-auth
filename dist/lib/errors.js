"use strict";class UnknownError extends Error{constructor(a){super(a),this.name="UnknownError",this.message=a}toJSON(){return{error:{name:this.name,message:this.message}}}}class CreateUserError extends UnknownError{constructor(a){super(a),this.name="CreateUserError",this.message=a}}class AccountNotLinkedError extends UnknownError{constructor(a){super(a),this.name="AccountNotLinkedError",this.message=a}}class InvalidProfile extends UnknownError{constructor(a){super(a),this.name="InvalidProfile",this.message=a}}module.exports={UnknownError,CreateUserError,AccountNotLinkedError,InvalidProfile};