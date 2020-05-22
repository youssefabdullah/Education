import React from 'react'
import { fire, userRef } from '../config/fire'

export default function SignupAPI(email, password, fristName, lastName ,mobile,admin) {
    fire.auth().createUserWithEmailAndPassword(email, password).then((data) => {
        console.log('Add User to DB');
        console.log(data.user.uid)
        userRef.child(data.user.uid).set({
            fristName,
            lastName,
            mobile,
            admin,
            email
        })
        return true;
    }).catch(() => { return false })

}

