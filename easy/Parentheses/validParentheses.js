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
           const j= brackets.pop()
           console.log(j, 'poped bracket')
           const k= openingTags.indexOf(j)
              console.log(k, 'index of poped bracket')
              console.log(str[i], 'closing bracket')
              console.log(closingTags[k], 'closing bracket')
              console.log(str[i]===closingTags[k], 'closing bracket')
           if(str[i]===closingTags[k]){
               return false;
           }
        }
    }

    if(brackets.length){
        return false;
    }
    // return true;
   
};

console.log(isValid("(]")) //true