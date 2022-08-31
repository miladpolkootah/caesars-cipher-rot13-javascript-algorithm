function rot13(str) {
    let strArr = str.split('');
    let alphG1 = `abcdefghijklm!?.,'"_-)(><@#$%^&*=+`.toUpperCase();
    let alphG2 = `nopqrstuvwxyz!?.,'"_-)(><@#$%^&*=+`.toUpperCase();
    for(let i=0; i<strArr.length; i++){
      if(alphG1.indexOf(strArr[i]) == -1){
        let index = alphG2.indexOf(strArr[i]);
        strArr[i] = alphG1[index];
      }else{
        let index = alphG1.indexOf(strArr[i]);
        strArr[i] = alphG2[index];
      }
    }
    
    let reduce = strArr.reduce((arr, item)=>{
      arr.push(item);
      if(item == undefined){
        arr.splice(arr.indexOf(item), 1, " ") 
      };
      return arr;
    },[])
    return reduce.join('');
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");