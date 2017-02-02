const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data)
        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }        

        this.length++;
        return this;
    }

    head() {
        if (this._head === null) {
            return null;
        } else {
            return this._head.data;
        }
    }

    tail() {
        if (this._tail === null) {
            return null;
        } else {
            return this._tail.data;
        }
    }

    at(index) {
        if (index > -1 && index < this.length){
            var current = this._head,
                i = 0;

            while(i++ < index){
                current = current.next;
            }

            return current.data;
        } else {
            return null;
        }
    }

    insertAt(index, data) {
        var node = new Node(data)
        if (index > -1 && index < this.length+1) {

            var current = this._head,
                i = 0;

            if (index === 0) {

                if (this.length == 0) {
                    this._head = node;
                    this._tail = node;
                } else {
                this._head.prev = node;
                node.next = this._head;
                this._head = node;
                }

            } else if (index === this.length){
                this._tail.next = node;
                node.prev = this._tail;
                this._tail = node;
            } else {
                while(i++ < index){
                    current = current.next;
                }
                node.next = current;
                node.prev = current.prev;
                current.prev.next = node;
                current.prev = node;
                
            }

            this.length++;
            return this;            
        } else {
            return null;
        }
    }

    isEmpty() {
        if(this.length == 0) {
            return true
        } else {
            return false
        }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (index > -1 && index < this.length){

            var current = this._head;
            var i = 0;

            if (index === 0){
                this._head = current.next;
                if (this.length == 1){
                    this._tail = null;
                } else {
                    this._head.prev = null;
                }

            } else if (index === this.length - 1) {
                current = this._tail;
                this._tail = current.prev;
                this._tail.next = null;
            } else {
                while(i++ < index){
                    current = current.next;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
            };
            this.length--;
            return this;       
        } else {
            return null;
        }
    }

    reverse() {
        var rev = [];
        var current = this._head;
        var i = 0;
        while (i < this.length) {
            rev.unshift(current.data);
            current = current.next;
            i++;
        };
        this.clear();
        for (var i = 0; i < rev.length; i++) {
            if (i == 0) {
                var node = new Node(rev[i]);
                if (this.length == 0) {
                    this._head = node;
                    this._tail = node;
                } else {
                    this._tail.next = node;
                    node.prev = this._tail;
                    this._tail = node;
                };      
                this.length++;
                this._head = node;
            } else if (i == rev.length - 1) {
                var node = new Node(rev[i]);
                if (this.length == 0) {
                    this._head = node;
                    this._tail = node;
                } else {
                    this._tail.next = node;
                    node.prev = this._tail;
                    this._tail = node;
                };      
                this.length++;
            } else {
                this.append(rev[i]);
            }
        }
        return this;
    }

    indexOf(data) {
        var current = this._head;
        var i = 0;
        while(i++ < this.length){
            if (current.data == data) {
                return i-1;
            }
            current = current.next;
        };
        return -1;
    }
}
// var l = new LinkedList()
// l.append(1)
// l.append(2)
// l.append(3)
// l.append(4)
// alert(l.reverse())
// alert(l.at(0))
// alert(l.at(1))
// alert(l.at(2))
// alert(l.at(3))
module.exports = LinkedList;