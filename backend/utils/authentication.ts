import bcrypt from 'bcrypt';

export const getPasswordHash = async (password: string) => {
    try {
        const hash: string = await bcrypt.hash(password, 12);
        return hash
    }catch (err) {
        console.log(err);
    }

}