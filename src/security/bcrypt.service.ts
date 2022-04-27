import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import PasswordEncoder from './PasswordEncoder';

@Injectable()
export default class BCryptPasswordEncoder implements PasswordEncoder{

    async encode(password: string, saltOrRounds?: number): Promise<string> {
        
        if(!saltOrRounds) {
            saltOrRounds = 10;
            return await bcrypt.hash(password, saltOrRounds);
        }
        try {
            return await bcrypt.hash(password, saltOrRounds);

        } catch(e) {
            return null;
        }
        
    }

    async match(rawPassword: string, hashPassword: string): Promise<boolean> {
        if(!rawPassword || !hashPassword) {
            return false;
        }
        try {
            return await bcrypt.compare(rawPassword, hashPassword);
        } catch(e) {
            return false;
        }   
        
    }
}