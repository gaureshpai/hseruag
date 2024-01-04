#include<stdio.h>
#include<string.h>
int mutex =-1,full =0,empty =20,x =10;
void producer(){
    --mutex;
    ++full;
    --empty;
    x++;
    printf("\nProducer produces item %d",x);
    ++mutex;
}
void consumer(){
    --mutex;
    --full;
    ++empty;
    printf("\nConsumer consumes item %d",x);
    x--;
    ++mutex;
}
int main(){
    int n,i;
    print("\nPress 1 for producer\n2.Press 2 for consumer\n3.Press 3 for exit");
    for(i=;i>0;i++){
        printf("\nEnter your choice:");
        scanf("%d",&n);
        switch(n){
            case 1:if((mutex==1)&&(empty!=0))
                        producer();
                    else
                        printf("Buffer is full!");
                    break;
            case 2:if ((mutex == 1) && (full != 0))
                        consumer();
                    else
                        printf("Buffer is empty!");
                    break;
            case 3:exit(0);
                    break;
        }
    }
}