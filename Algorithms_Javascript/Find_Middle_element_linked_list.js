function Node(data, next) {
    this.data = data;
    this.next = next;
}

var n1 = new Node("Node-1", null);
var n2 = new Node("Node-2", n1);
var n3 = new Node("Node-3", n2);
var n4 = new Node("Node-4", n3);
var n5 = new Node("Node-5", n4);

var head = n5;
var fastPointer = head;
var slowPointer = head;

while (fastPointer.next !== null && fastPointer.next.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
}

console.log(slowPointer.next.data);