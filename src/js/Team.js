export default class Team {
    constructor() {
        this.members = new Set();
    }
    
    add(object) {
        if (!this.members.has(object)) {
            this.members.add(object);
        } else {
            throw new Error('Персонаж уже есть в команде');
        }
    }

    addAll(array) {
        array.forEach(item => {
            this.members.add(item);
        })
    }

    toArray() {
        const array = [];
        this.members.forEach(item => {
            array.push(item);
        });
        return array;
    }
}