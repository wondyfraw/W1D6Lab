window.onload = function () {
    "use strict"

    let decoreButton = document.getElementById("decorBtn");
    decoreButton.onclick = function () {
        setInterval(textAreaFont, 5000);
    };


    function textAreaFont() {
        let textarea = document.getElementById("decorTextArea");
        let size = window.getComputedStyle(textarea).fontSize;
        //console.log(parseInt(size));
        textarea.style.fontSize = parseInt(size) + 2 + "pt";
        //alert("Hello, world!");

        //Increase font-size for every 500ms

    };

   //******** Checkbox operation  ***********************////////
    let checkBox = document.getElementById("checkboxDec");
    checkBox.onchange = function () {
        //if unchecked the checked box
        if (checkBox.checked == false) {
            document.getElementById("decorTextArea").className = "uncheckedfont";
            document.body.style.backgroundImage = "url('')";
        } else {
            document.getElementById("decorTextArea").className = "textareaFontWeight";
            document.body.style.backgroundImage = "url('/W1D6Lab/image/hundred-dollar-bill.jpg')";
            //alert("Hello, world!");
        }
    };

    //********Convert text to Pig Latin *******///////////////////////
    let pigLatinBtn = document.getElementById("pigLatinBtn");
    pigLatinBtn.onclick = function(){
        let text = document.getElementById("decorTextArea").value;
        //text.trim();text.replace(/^\s+|\s+$/gm,'');
        let strWithoutSpace = text.trim();    //remove whitespace from both side of the string
        text = strWithoutSpace;
        if(text != null){
            let subText = "";
            let textArea = document.getElementById("decorTextArea");
            let consonant = 'bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ';  //consonant letters
            let vowel = 'aAeEiIoOuU';                                      //Vowel letters

            /**
              If the first latter is consonant

             */

            if(consonant.includes(text.charAt(0))) {
                for (let i = 0; i < text.length; i++) {
                        if (consonant.includes(text.charAt(i))){
                            subText += text.charAt(i);
                    }
                }

                let subStr = text.substring(subText.length,text.length);
                subText = subText + "-ay";
                subStr = subStr.replace(/ +/g,"");
                //subText.replace(/\s/g,'');
                subStr = subStr+subText;
                //subStr.replace(/\s/g, '');
                //subStr = subStr.split("").join("");
                textArea.value = subStr;
            }

            /**
             * If the first letter is Vowel
             */
           else if (vowel.includes(text.charAt(0))){
               text = text.substring(0,text.length);
               textArea.value = text+"-ay";
           }

            /**
             * Other wise does not do anything
             */
            else {
            alert("Word is not beginning either consonant or vowel");
            }
        }
    };


    ////Malkovitch Button operation ////////////
    let malkovBtn = document.getElementById("malkovitchBtn");
    malkovBtn.onclick = function() {
        let words = document.getElementById("decorTextArea").value;
        console.log(words.length);
        if ((words.length - 3) >= 5) {
            document.getElementById("decorTextArea").value = "Malkovitch   ";
        }
    };
};

