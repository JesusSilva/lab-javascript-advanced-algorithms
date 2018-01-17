function QueueDataStructure () {
    this.queueControl= [];
    this.MAX_SIZE= 1;
    }
    QueueDataStructure.prototype.isEmpty= function() {
    return this.queueControl.length== 0;
     };
    QueueDataStructure.prototype.canEnqueue= function() {
      return this.queueControl.length<this.MAX_SIZE
     };
    QueueDataStructure.prototype.enqueue= function(value) {
    
    this.queueControl.push(value);
    this.queueControl.reverse();
    if(this.queueControl.length>this.MAX_SIZE){
        return "Queue Overflow";
    }else{
         return this.queueControl;
    }
     };
    QueueDataStructure.prototype.dequeue= function() {
       if(this.queueControl.length==0){
           return "Queue Underflow";
       }else{
           return this.queueControl.pop();
       };
     };