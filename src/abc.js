import React,{resolve} from "react";

export async function login({username,password})
{
    return new Promise(
        (resolve,reject) => {
            if (username ==='ankit' && password ==='123') {
                resolve();
            }
            else 
            {
                reject();
            }
        },1000);
}