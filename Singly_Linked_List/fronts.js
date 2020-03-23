class LinkedList{
    constructor(){
        this.head = null;
    }
    //Add Fronts
    //Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.
    addFront(Node, value){
        newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    //remove fronts
    //Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If the list is empty, return null.
    removeFront(firstNode){
        if(this.head === null){
            return null;
        }
        else {
            this.head = this.head.next;
        }
    }
    //Front
    //Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If the list is empty, return null.
    front(){
        if(this.head){
            return this.head.value;
        }
    }
}
