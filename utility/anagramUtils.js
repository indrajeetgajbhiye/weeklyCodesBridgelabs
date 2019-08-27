checkAnagram= function(str1, str2) {
    var flag = 0;
    /**
    * @description if string lengths are equal then only they will be a rearrangement
    */
    if (str1.length == str2.length) {
        for (var i = 0; i < str1.length; i++) {
            for (var j = 0; j < str2.length; j++) {
/**
 * @description check if all characters in string1 are same as characters in string2
 */          
                if (str1[i] == str2[j])
                /**
                * @description 
                * @var flag increment by 1
                */
                flag++;
            }
        }
/**
 * @description check if count variable is equal to length
 */
      if (flag == str1.length)
        console.log("Anagrams");
      else
        console.log("Not Anagrams");;
    }
    else
      console.log("Not Anagrams");;
}


module.exports = {
      checkAnagram,
  }