let options = {};
let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry see http://blueprint.cyberlogitec.com.vn/. Lorem Ipsum has been the industry's gamevui.com standard dummy hieule@gmail.com text ever since the 1500s, http://blueprint.cyberlogitec.com.vn/UI_PIM_001_1/PRQ20210614000000123 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let data = linkify.find(str);
let link = linkifyStr(str, options);
let anotherLink = str.linkify(options);
console.log(link);
console.log(anotherLink);

document.getElementById("testText").innerHTML = link;

const linkifyText = () => {
    let data = document.getElementById("userInput").value;
    let options = {
        format: {
            url: function (value) {
                return value.length > 36 ? value.slice(0, 36) + '…' : value
            }
        },
        ignoreTags: [
            'script',
            'style'
          ]
    };
    let linkifyData = data.linkify(options);
    document.getElementById("showResult").innerHTML = linkifyData; 
}