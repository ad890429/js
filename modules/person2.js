// export default: 預設的匯出

export default class Person2 {
    gender = "male"; // 直接設定屬性值
  
    // 建構函式
    constructor(name = "nobody", age = 0) {
      this.name = name;
      this.age = age;
    }
    getInfo() {
      return `${this.name} ${this.age}`;
    }
    toString = () => JSON.stringify(this);
  }
  
  console.log('person2 裡');
  
  // export : 一般的匯出
  export const PI = 3.14;
  const PI2 = 3.14159;
  // export default Person2;