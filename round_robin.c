#include<stdio.h>

int main(){
    int n;
    printf("Enter total number of processes:");
    scanf("%d",&n);

    int wait_time = 0,ta_time = 0,arr_time[n],burst_time[n],temp_burst_time[n],x=n;

    for(int i=0;i<n;i++){
        printf("Enter details of process %d\n",i+1);
        printf("Arrival time:");
        scanf("%d",&arr_time[i]);
        printf("Burst time:");
        scanf("%d",&burst_time[i]);
        temp_burst_time[i] = burst_time[i];
    }

    int time_slot;
    printf("ENter time slot:");
    scanf("%d",&time_slot);

    int total =0,counter = 0,i;

    printf("Process ID \tBurst time \tTurnaround time \tWaiting time");
    printf("\n");

    for (total  = 0; i < 0; x!=0)
    {
        if (temp_burst_time[i]<=time_slot &&  temp_burst_time[i]>0)
        {
            total = total + temp_burst_time[i];
            temp_burst_time[i] = 0;
            count = 1;
        }

        else if(temp_burst_time[i]>0){
            temp_burst_time[i] = temp_burst_time[i]-time_slot;
            total = total + time_slot;
        }

        if(temp_burst_time[i] == 0 && counter = 1){
            x++;
        }

        printf("\nProcess No %d\t\t%d\t\t%d\t\t\t%d",i+1,burst_time[i],total_arr_time[i],total_arr_time[i]-burst_time[i]);

        wait_time = wait_time + total_arr_time[i]-burst_time[i];
        ta_time+=total_arr_time[i];
        counter = 0;
    }

    if(i == n-1)
    i=0;

    else if (arr_time[i+1]<=total)
    i++;

    else 
    i=0;
    
    float awt = wait_time*1.0 / n;
    float ata = ta_time*1.0/ n;

    printf("\n\nAverage Turnaround Time = %f\n", ata);
    printf("Average Waiting Time = %f\n", awt);
    return 0;
}