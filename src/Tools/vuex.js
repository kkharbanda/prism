// set error messgaes /success messages


const msgSuccess= (commit, msg ='Thank you!!') => {
    return commit('notify/setToastMsg',{
        msg:msg,
        type:'success'
    },{ root: true});
}

const msgError = (commit, msg ='oops ! something is wrong') => {
    return commit('notify/setToastMsg',{
        msg:msg,
        type:'error'
    },{ root: true});
}
export {msgSuccess,msgError}