#include<stdio.h>
int main(){
    int p,c,count=0,i,j,alc[5][3],max[5][3],need[5][3],safe[5],available[3],done[5],terminate=0;
    printf("ENter the number of processes and resources");
    scanf("%d%d",&p,&c);
    printf("Enter allocation of resource of all process %dx%d matrix",p,c);
    for(i=0;i<p;i++)
    for(j=0;j<c;j++)
    scanf("%d",&max[i][j]);
    printf("Enter the available resources");
    for(i=0;i<c;i++){
        scanf("%d",&available[i]);
    }
    printf("\nNeed resources matrix are\n");
    for(i=0;i<p;i++){
        for(j=0;j<c;j++){
            need[i][j] = max[i][j] - alc[i][j];
            printf("%d\t",need[i][j]);
        }
        printf("\n");
    }
    for(i=o;i<p;i++)
        done[i] = 0;
        while(count<p){
        for(i=0;i<p;i++){
            if(done[i] == 0){
                for(j=0;j<c;j++){
                    if(need[i][j]>available[j])
                        break;
                }
                if(j==c){
                    safe[count] = i;
                    done[i] = 1;
                    for(j=0;j<c;j++)
                        available[j]+=alc[i][j];
                    count++;
                    terminate=0;
                }
                else{
                    terminate++;

                }
            }
            if(terminate == p-1){
                printf("Safe sequence does not exist");
                break;
            }
        }
        if(terminate!=p-1){
            printf("\navailable resource after compilation\n");
            for(i=0;i<c;i++)
                printf("%d\t",available[i]);
            printf("\nSafe sequence are\n");
            for(i=0;i<n;i++)
                printf("p %d\t",safe[i]);
        }
    }
}