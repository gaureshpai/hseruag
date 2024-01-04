#include <stdio.h>
#include <string.h>
int main()
{
    int n;
    printf("Enter total number of processes:");
    scanf("%d", &n);
    int et[20],at[10],n,i,j,temp,p[10],st[10],ft[10],wt[10],ta[10],totwt=0,totta=0;
    float awt,ata;
    char pn[10][10],t[10];
    for (int i = 0; i < n; i++)
    {
        printf("Enter details of process name,arrival time,execution time & priority:");
        scanf("%s,%d,%d,%d",pn[i],&at[i],&et[i],&p[i]);
    }
    for (i = 0; i < n;i++)
    for(j=0;j<n;j++)
    {
        if (p[i]<p[j])
        {
            temp = p[i];
            p[i] = p[j];
            p[j] = temp;
            temp = at[i];
            at[i] = at[j];
            at[j] = temp;
            temp = et[i];
            et[i] = et[j];
            et[j] = temp;
            strcpy(t,pn[i]);
            strcpy(pn[i],pn[j]);
            strcpy(pn[j],t);
        }
    }
    for(i=0;i<n;i++){
        if(i==0){
        st[i] = at[i];
        wt[i] = st[i] - at[i];
        ft[i] = st[i] + et[i];
        ta[i] = ft[i] - at[i];
        }
        else{
            st[i] = ft[i-1];
            wt[i] = st[i] - at[i];
            ft[i] = st[i] + et[i];
        }
        total+=wt[i];
        total+=ta[i];
    }
    float awt = (float)totwt / n;
    float ata = (float)totta / n;
    printf("\nPname\tarrivaltime\texecution time\t priority\t waiting time\ttattime");
    for (i = 0; i < n; i++)
    {
        printf("\n%s\t%5d\t\t%5d\t\t%5d\t\t%5d\t\t%5d", pn[i], at[i], et[i],p[i], wt[i], ta[i]);
    }

    printf("\n\nAverage Turnaround Time = %f\n", ata);
    printf("Average Waiting Time = %f\n", awt);
    return 0;
}