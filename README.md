# adminanywhere

<h3>This app allows your to reset the print spool on any windows machines/server using an in chrome browser extension. It's just for fun, but feel free to use it if you like it!<h3>

<ul>
<h3>INSTALL:<h3>

<l1>Download all folders to your machine</li>


<l1>Install nodejs</li>

<l1>Open command line as admin and navigate to adminanywhere/chromeplugin directory
    run command below (replace <ip> with the servers ip or hostname local host and 127.0.0.1 will not work): 
    echo <ip> > ip.txt</li>

<l1>navigate to adminanywhere/server then start server by using command node index.js</li>

<l1>leave command line terminal open (You can minimized it)</li>

<l1>Go to chrome browser > Menu (Three dots) > more tools > extensions</li>

<l1>at the top right enable developer mode by using the toggle</li>

<l1>at the top left select "load unpacked" navigate and select the chromeplugin directory</li>
 
<l1>navigate to the top right and you will see a blue icon with "AA" this means it has been installed.</li>
    
<l1>Print to a printer that is offline or make a job fail</li>

<l1>Left click back on the "AA" in chrome and click on clear spool.</li>

<l1>Watch your print spool clear!</li>

</ul>
NOTE: Bitdefender will block after three clears and the node js app will need to be restarted. Add an exclusion once this happen.

COMING SOON:

Auto detect local AA servers:
Auto Launch AA node js server on boot
Security this is version .000001 don't rely on this being secure..yet
