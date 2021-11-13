 echo "" > images.js
 for f in imgs/*.jpg; do
     # 先頭が数字で始まるファイル名はjavascriptの変数名として無効なので、`img_`をprefixに
     out=$(echo "const img_$(basename $f .jpg)=""\"data:image/jpeg;base64,")$(base64 $f)"\";"
     echo $out >> images.js
 done
