import BaseModel from '../BaseModel';

import { is } from 'typescript-is';


import {createInstanceFromJson} from '../ModelTypes'


export default class PubliqKeyPair extends BaseModel {

    masterKey: string;
    index: number;
    publicKey: string;
    privateKey: string;

    constructor(data?: any) { 
        super();
        if (data !== undefined) {

           const _masterKey = data.master_key === undefined ?  data.masterKey: data.master_key;
           if(is<string>(_masterKey)){
               this.masterKey = _masterKey
           } else {
               throw new Error(`Type Error: PubliqKeyPair masterKey is not a string`)
           }

           const _index = data.index;
           if(is<number>(_index)){
               this.index = _index
           } else {
               throw new Error(`Type Error: PubliqKeyPair index is not a number`)
           }

           const _publicKey = data.public_key === undefined ?  data.publicKey: data.public_key;
           if(is<string>(_publicKey)){
               this.publicKey = _publicKey
           } else {
               throw new Error(`Type Error: PubliqKeyPair publicKey is not a string`)
           }

           const _privateKey = data.private_key === undefined ?  data.privateKey: data.private_key;
           if(is<string>(_privateKey)){
               this.privateKey = _privateKey
           } else {
               throw new Error(`Type Error: PubliqKeyPair privateKey is not a string`)
           }

        }
    }

    static get PropertyMap () {
        return {
            masterKey : 'master_key',
            index : 'index',
            publicKey : 'public_key',
            privateKey : 'private_key',
        }
    }

    static get Rtt () {
        return 45;
    }

} 
