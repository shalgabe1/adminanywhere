# adminanywhere

This app allows your to reset the print spool on any windows machines/server using an in chrome browser extension. It's just for fun, but feel free to use it if you like it!


INSTALL:

1.Download all folders to your machine


2.Install nodejs

2.Open command line as admin and navigate to adminanywhere/chromeplugin directory
    run command below (replace <ip> with the servers ip or hostname local host and 127.0.0.1 will not work): 
    echo <ip> > ip.txt

3.navigate to adminanywhere/server then start server by using command node index.js

4. leave command line terminal open (You can minimized it)

5. Go to chrome browser > Menu (Three dots) > more tools > extensions

6 at the top right enable developer mode by using the toggle

7.at the top left select "load unpacked" navigate and select the chromeplugin directory
 
8. navigate to the top right and you will see a blue icon with "AA" this means it has been installed.
    
9.Print to a printer that is offline or make a job fail

10.Left click back on the "AA" in chrome and click on clear spool.

11. Watch your print spool clear!


NOTE: Bitdefender will block after three clears and the node js app will need to be restarted. Add an exclusion once this happen.

COMING SOON:

Auto detect local AA servers:
Auto Launch AA node js server on boot
Security this is version .000001 don't rely on this being secure..yet
