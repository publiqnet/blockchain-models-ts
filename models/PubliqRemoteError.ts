import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqRemoteError extends BaseModel {

    message: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _message = data.message;
           if(is<string>(_message)){
               this.message = _message
           } else {
               throw new Error(`Type Error: PubliqRemoteError message is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            message : 'message',
        }
    }

    static get Rtt () {
        return 88;
    }

} 
