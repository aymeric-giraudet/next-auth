"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserSchema=exports.User=void 0;class User{constructor(a,b,c){this.name=a,this.email=b,this.image=c}}exports.User=User;var UserSchema={name:"User",target:User,columns:{id:{primary:!0,type:"int",generated:!0},name:{type:"varchar",nullable:!0},email:{type:"varchar",unique:!0},image:{type:"varchar",nullable:!0}}};exports.UserSchema=UserSchema;