/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const str= s.split('');
    const openingTags= ['(','[','{']
    const closingTags = [')',']', '}']

    const brackets= []

    for(let i=0; i<str.length; i++){
        if(openingTags.includes(str[i])){
            brackets.push(str[i])
        }   
        else if (closingTags.includes(str[i])){
            if(!brackets.length){
                return false;
            } 
           const j= brackets.pop();
           const k= openingTags.indexOf(j)
           if(!(str[i]==closingTags[k])){
               return false;
           }
        }
    }

    if(brackets.length){
        return false;
    }
    return true;
   
};

console.log(isValid("(]")) //true