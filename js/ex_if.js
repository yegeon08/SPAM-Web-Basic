const name = "Mike";
const age = 30;

if (name == "Tom" && age > 19) {
  console.log("너 뒤짐 ㅅㄱ");
} else {
  console.log("넌 다음에 뒤짐");
}

if (name === "Tom" || age > 19) {
  console.log("너 뒤짐 ㅅㄱ");
} else {
  console.log("넌 다음에 뒤짐");
}

if (name == "Mike" && age < 13) {
  console.log("너 뒤짐 ㅅㄱ");
} else {
  console.log("넌 다음에 뒤짐");
}


let isAdult = age > 19;
if(isAdult){
    console.log("성인입니다.");
}
else(isAdult){
    console.log("미성년자입니다.");
}