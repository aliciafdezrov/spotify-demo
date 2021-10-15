export interface Authorization {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
}

export const createEmptyAuthorization = (): Authorization => ({
    accessToken: '',
    tokenType: '',
    expiresIn: 0,
});
