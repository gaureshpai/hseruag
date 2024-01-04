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