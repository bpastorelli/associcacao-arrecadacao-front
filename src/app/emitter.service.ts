import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EmitterService {

  constructor() { }

  private arr = EmitterService
  private static _emitters: { [channel: string]: EventEmitter<any> } = {};

  static get(channel: string): EventEmitter<any> {
    if (!this._emitters[channel])
      this._emitters[channel] = new EventEmitter();
    return this._emitters[channel];
  }

  static add(channel: string){

    this._emitters[channel] = new EventEmitter();

  }




}
