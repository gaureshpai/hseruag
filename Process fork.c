#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>
int main()
{
    pid_t child_pid;
    int status;
    // Create a child process
    child_pid = fork();
    if (child_pid < 0)
    {
        // Fork failed
        perror("Fork failed");
        exit(1);
    }
    else if (child_pid == 0)
    {
        // Child process
        printf("Child process (PID: %d) is running.\n", getpid());
        // Replace the child process with a new program
        execlp("/bin/ls", "ls", "-l", NULL);
        // If exec fails, the code below will be executed
        perror("Exec failed");
        exit(1);
    }
    else
    {
        // Parent process
        printf("Parent process (PID: %d) created a child (PID: %d).\n", getpid(), child_pid);
        // Wait for the child process to finish
        wait(&status);
        if (WIFEXITED(status))
        {
            printf("Child process (PID: %d) exited with status %d.\n", child_pid,
                   WEXITSTATUS(status));
        }
        else
        {
            printf("Child process (PID: %d) did not exit normally.\n", child_pid);
        }
    }
    return 0;
}