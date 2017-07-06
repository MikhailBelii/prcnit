import {Injectable} from 'angular2/core';
import {BACKEND} from './mock-backe';

@Injectable()
export class BackeService {
    getBackend() {
        return Promise.resolve(BACKEND);
    }
}
