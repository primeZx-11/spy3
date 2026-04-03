function alpha(ch){
    ch= ch.toUpperCase();
    let i = 0 ; 
    let test = true ; 
    do{
        if (ch.charAt(i) >= 'A' && ch.charAt(i) <= 'Z' || ch.charAt(i) == ' '){
            i++ ;
        }else{
            test = false;
        }
    }while(i<ch.length && test);
    return test;
}

function sub(){
   let nom = document.getElementById('name').value;
   nom = nom.trim();
   let p = document.getElementById('res');
    if(alpha(nom) == false){
        p.innerHTML = 'its a name only letters';
        return false;
    }
    if (document.getElementById('name').value.length === 0){
        p.innerHTML = 'enter your name';
        return false;
    }
    if (document.getElementById('addname').value.length === 0){
        p.innerHTML = 'enter your addname';
        return false;
    }
    if(document.getElementById('email').value.length === 0){
        p.innerHTML = 'email pls';
        return false;
    }
    if (document.getElementById('password').value.length === false){
        p.innerHTML = 'password pls';
        return false ;
    }   
/**=======================
 * other select
 * =====================
 */
let sel =document.getElementById('sel1').value;
if (sel === 'other'){
    document.querySelector('.other').style.display = 'block';
}
    p.innerHTML = 'nice to meet you';

}

