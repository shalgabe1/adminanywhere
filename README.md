# adminanywhere

This app allows your to reset the print spool on any windows machines/server using an in chrome browser extension.


INSTALL:

1.Download all folders to your machine
2.Install nodejs
2.Open command line as admin and navigate to adminanywhere/server
3.start server by using command node index.js
4. leave command line terminal open (You can minimized it)
5. Go to chrome browser > Menu (Three dots) > more tools > extensions
6 at the top right enable developer mode by using the toggle
7.at the top left select "load unpacked"
8. navigate to the top right and you will see a blue icon with "AA"
    left click on it and select "set server" in the dialog box set server to the ip or host name of your 
    print server "localhost" and "127.0.0.1" will work for if the server and your first client are the same machine.
9.Print to a printer that is offline or make a job fail
10.Left click back on the "AA" in chrome and click on clear spool.
11. Watch your print spool clear!


NOTE: Bitdefender will block after three clears and the node js app will need to be restarted. Add an exclusion once this happen.

COMING SOON:

Auto detect local AA servers:
Auto Launch AA node js server on boot
Security this is version .000001 don't rely on this being secure..yet
