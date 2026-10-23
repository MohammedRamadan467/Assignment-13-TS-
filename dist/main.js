class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    notebooks = [];
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
        if (age < 18 && age > 60) {
            throw new Error("Age must between 18 and 60 ");
        }
    }
    displayInfo() {
        console.log(this.id);
        console.log(this.name);
        console.log(this.email);
        console.log(this.password);
        console.log(this.phone);
        console.log(this.age);
    }
}
const user1 = new User(33, "mohamed", "example@gmail.com", "1234", "01065119670", 19);
user1.displayInfo();
class Admin extends User {
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    manageNotes() {
        console.log("Admin is managing notes");
    }
}
const admin = new Admin(234, "ahmed", "example@gmail.com", "1234", "01065119670", 19);
admin.manageNotes();
class Note {
    id;
    title;
    content;
    userId;
    author;
    constructor(id, title, content, userId, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.author = author;
    }
    preview() {
        return this.content.slice(0, 30);
    }
}
const note1 = new Note(123, "A one", "Backend Nodejs in route is great and nice", user1.id, user1);
console.log(note1.preview());
class NoteBook {
    notes = [];
    addNote(note) {
        this.notes.push(note);
    }
    removeNote(noteId) {
        this.notes = this.notes.filter(note => note.id != noteId);
    }
}
const notebook = new NoteBook();
notebook.addNote(note1);
notebook.removeNote(1);
console.log(notebook.notes);
user1.notebooks.push(notebook);
// Generics
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }
    getAllItems() {
        return this.items;
    }
}
const numbers = new Storage();
numbers.addItem(10);
numbers.addItem(15);
numbers.addItem(80);
console.log(numbers.getAllItems());
const booleans = new Storage();
booleans.addItem(true);
booleans.addItem(false);
console.log(booleans.getAllItems());
export {};
