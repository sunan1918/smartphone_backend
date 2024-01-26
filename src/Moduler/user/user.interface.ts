export interface Tuser {
    name: string;
    email: string;
    password: string;
}
export interface TpayloadUser {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export interface Tlogin {
    email: string;
    password: string;
}
export interface TjwtPayLoad {
    name: string;
    email: string;
}