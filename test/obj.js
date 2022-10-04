class NameTag {
    name = ""; // char[]
    age = 0;
    constructor(_name, _age=-1) {
        this.name = _name;
        this.age = _age; // undefined
    }
}
// dynamic type vs static type
class TagList {
    nameTags = []; // * property
    count = 0;

    add(newNameTag) {
        this.nameTags.push(newNameTag);
        this.count++;
    }
    constructor() {}
}

const tagList = new TagList();

tagList.add("apple"); // pointer \ reference
tagList.add(new NameTag("banana",3));
tagList.add("beer");

console.log(tagList);

