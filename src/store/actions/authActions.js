export const signIn=(credentials)=>{
    return(dispath, getState,{getFirebase})=>{
        const firebase=getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispath({type:'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispath({type:'LOGIN_ERROR',err})
        });
    }
}

export const signOut=()=>{
    return(dispath,getState,{getFirebase})=>{
        const firebase=getFirebase();
        
        firebase.auth().signOut().then(()=>{
            dispath({type:'SIGNOUT_SUCCESS'});
        });
    }
}