
export default interface PasswordEncoder {
    encode(password: string, saltOrRounds?: number): Promise<string>;
    match(rawPassword: string, hashPassword: string): Promise<boolean>;
}