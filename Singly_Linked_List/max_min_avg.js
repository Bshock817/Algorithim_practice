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
    //Remove Fronts
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
    //Contains
    //Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. Given a ListNode pointer and a val, return whether val is found in any node in the list.
    contains(value){
        var current = this.head;
        while(current){
            if(current.value == value){
                return "found it";
            }
            if(current.next === null){
                break;
            }
        current = current.next;
        }
    }
    //Length
    //July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.
    length(){
        var current = this.head;
        if(current === null){
            return 0;
        }
        var count = 1;
        while(current){
            count++;
            if(current.next === null){
                break;
            }
            current = current.next;
        }
        return count;
    }
    //Display
    //Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!
    display(){
        var current = this.head;
        if(current === null){
            return "[]";
        }
        var output = "[";
        while(current){
            output += current.value + ", ";
            if(current.next === null){
                break;
            }
            current = current.next;
        }
        output += "]";
        return output;
    }
    //Max
    //American Idol seems to air singers that are the best, and a few that seem like the worst! Create function max(node) to return list’s largest val.
    max(){
        var current = this.head;
        if(current === null){
            return "empty";
        }
        var max = current.value;
        while(current){
            if(current.value > max){
                max = current.value;
            }
            if(current.next === null){
                break;
            }
            current = current.next;
        }
        return max;
    }
    //Min
    //Create min(node) to return list’s smallest val.
    min(){
        var current = this.head;
        if(current === null){
            return "empty";
        }
        var min = current.value;
        while(current){
            if(current.value < min){
                min = current.value;
            }
            if(current.next === null){
                break;
            }
            current = current.next;
        }
        return min;
    }
    //Avg
    //Create average(node) to return average val.
    avg(){
        var current = this.head;
        var total = 0;
        if(current === null){
            return "empty";
        }

        while(current){
            total += current.value;
            if(current.next === null){
                break;
            }
            current = current.next;
        }

        return total / this.length();
    }
}
