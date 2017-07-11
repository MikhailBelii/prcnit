import {BACKEND} from './mock-backend';
import {Injectable} from 'angular2/core';

@Injectable()
export class BackService {
    getBackend() {
        return Promise.resolve(BACKEND);
    }
}
