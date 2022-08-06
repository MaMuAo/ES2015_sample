// constで宣言したobjectは再代入可能
// ただのconst変数の場合は再代入不可
const val1 = {
  name: "ゆう",
  age: 37
};

// 上書き可能
val1.name = "yu";

// プロパティの変更も可能
val1.adress = "Hiroshima";
console.log(val1);

// constで宣言した配列は再代入可能
const val2 = ["doc", "cat"];
// 配列の場合も上書き可能
val2[0] = "bird";
// 要素の追加も可能
val2.push("monkey");
console.log(val2);

//　reacrの場合は基本的にconstで宣言する
// なぜならobjectも配列もconst宣言でOKだし
// 動的なものはstateを使うから

/**
 * テンプレート文字列
 */
// 従来の書き方
const name = "ゆう";
const age = 37;
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列
const message2 = `私の名前は${name}です。年齢は${age}だよ。`;
console.log(message2);

/**
 * アロー関数
 */
// 1.従来の書き方
// function func1(str) {
//   return str;
// }
// 2.1の従来の書き方と同じ
const func1 = function (str) {
  return str;
};
console.log(func1("func1です。"));
// アロー関数
// 従来の書き方を2の形に直してからアロー関数にするとわかりやすい！！
const func2 = (str) => {
  return str;
};
// ↓こう書いてもOK
// const func2 = (str) => str;
console.log(func2("func2です。"));

/**
 * 分割代入
 */
const myProfile = {
  name2: "ゆう",
  age2: 37
};
// 従来の書き方
const message3 = `私の名前は${myProfile.name2}です。年齢は${myProfile.age2}ぞ。`;
console.log(message3);
// 分割代入は事前に取り出しておくこと
// reactではよく使うらしい！！
const { name2, age2 } = myProfile;
const message4 = `私の名前は${name2}です。年齢は${age2}んだ。`;
console.log(message4);

// // 交友書き方はできない！！！！
// const {first, second} = myProfile;
// const message5 = `私の名前は${first}です。年齢は${second}よ。`;
// console.log(message5);

// 配列の場合、従来の書き方
const myProfile2 = ["ゆう", 37];
const message6 = `私の名前は${myProfile2[0]}です。年齢は${myProfile2[1]}どす。`;
console.log(message6);

// 分割代入
// 配列の分割代入は順番が大事
// index0から順に書いていくこと！！
const [name3, age3] = myProfile2;
const message7 = `私の名前は${name3}です。年齢は${age3}に。`;
console.log(message7);

/**
 * デフォルト値、引数など
 */
const sayHello = (name) => console.log(`こんちには！${name}さん`);
sayHello("あおと");

const sayHello2 = (name = "ゆう") => console.log(`こんちには！${name}さん`);
// 何も渡さないでもundefideにならない
sayHello2();

/**
 * スプレッド構文 ...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
// 順番に配列の中身が渡される
sumFunc(...arr1);

// 纏める
const arr2 = [1, 2, 3, 4, 5];
// ↓分割代入
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(...arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// ↓arr4の配列をコピー
const arr6 = [...arr4];
arr6[0] = 300;
console.log(arr6);
//console.log(arr4);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

// これだとコピーではなく参照先が同じなので
const arr8 = arr4;
// 元の配列のarr4も変更されてしまいバグのもと
arr8[0] = 100;
console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "佐藤", "小林"];
// 従来の書き方
for (let i = 0; i < nameArr.length; i++) {
  console.log(nameArr[i]);
}
// mapを使ったらこうなる
nameArr.map((name) => console.log(name));
nameArr.map((name, index) => console.log(`${index}番目は${name}です`));

// ↓returnされた結果に基いて新しい配列を作成している
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

//
const numArr = [1, 2, 3, 4, 5];
// ↓returnされた結果に基いて新しい配列を作成している
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);
numArr.map((n) => console.log(name));

// ↓returnされた結果に基いて新しい配列を作成している
const newNameArr = nameArr.map((name) => {
  if (name === "小林") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 論理演算子の本当の意味 && ||
 */

// || 左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定";
console.log(fee);

// && 左側がtrueなら右側を返す
const num3 = null;
const fee3 = num3 && "何か設定されました";
console.log(fee3);
