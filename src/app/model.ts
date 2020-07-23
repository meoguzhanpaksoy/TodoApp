export class model{
    user;
    items;

    constructor(){
        this.user="çınar";
        this.items =[
            new TodoItem("Spor",true),
            new TodoItem("Kahvaltı",false),
            new TodoItem("Kitap okuma",false),
            new TodoItem("Sİnema",false),
         ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description,action){
        this.action=action;
        this.description=description;

    }
}