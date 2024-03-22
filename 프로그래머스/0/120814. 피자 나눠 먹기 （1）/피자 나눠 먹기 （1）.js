function solution(n) {
    if(n <= 7){
        return 1;
    }
     else if(n <= 14){
        return 2;
    }
     else if(n <= 21){
        return 3;
    }
    
     else if(n <= 28){
        return 4;
    }
    
     else if(n <= 35){
        return 5;
    }
    
    else if(n <= 42){
        return 6;
    }
    
     else if(n <= 49){
        return 7;
    }
    
    else if(n <= 56){
        return 8;
    }
    
    else if(n <= 63){
        return 9;
    }
    else if(n <= 70){
        return 10;
    }
    else if(n <= 77){
        return 11;
    }
    else if(n <= 84){
        return 12;
    }
    else if(n <= 91){
        return 13;
    }
    else if(n <= 98){
        return 14;
    }
    else if(n <= 100){
        return 15;
    }
    else{
        return '주문 불가';
    }
}