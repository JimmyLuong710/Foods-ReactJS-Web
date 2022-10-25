import { AxiosAuth } from "../services/AxiosService";

const getAccounts = async () => {
    let {data} = await AxiosAuth.get('/accounts')
    return data
};

export const updateAccount = async (account, accountId) => {
    let {data} = await AxiosAuth.put(`/account/${accountId}`)
    return data
};

export const deleteAccount = async (accountId) => {
    let {data} = await AxiosAuth.delete(`/account/${accountId}`)
    return data
};

export const addAccount = async (account) => {
    let {data} = await AxiosAuth.post(`/account`, account)
    return data
};

const accountAPI = {
    getAccounts,
    updateAccount,
    deleteAccount,
    addAccount
}

export default accountAPI;