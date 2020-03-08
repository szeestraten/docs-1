(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{256:function(e,t,s){"use strict";s.r(t);var a=s(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"x2go"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x2go"}},[e._v("#")]),e._v(" X2Go")]),e._v(" "),s("p",[e._v("This guide explain how you can install and configure the "),s("a",{attrs:{href:"https://wiki.x2go.org/doku.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("X2Go"),s("OutboundLink")],1),e._v(" software to get instant and 'passwordless' access to graphical tools in your lab, such as "),s("strong",[e._v("RStudio")]),e._v(", "),s("strong",[e._v("Stata")]),e._v(", "),s("strong",[e._v("SPSS")]),e._v(" and "),s("strong",[e._v("MatLab")]),e._v(".")]),e._v(" "),s("p",[e._v("If you are connecting to the home machine in your lab, you are good to go after you have set up your local machine:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#set-up-your-local-machine"}},[e._v("Set up your local machine")])])]),e._v(" "),s("p",[e._v("If you want to connet to an unmanaged machine (iaas or blue) you will need to install the X2Go server before you connect:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#install-x2go-server-on-unamanaged-lab-machine-iaas"}},[e._v("Set up your unmanaged lab machine (iaas)")])])]),e._v(" "),s("h2",{attrs:{id:"set-up-your-local-machine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-your-local-machine"}},[e._v("#")]),e._v(" Set up your local machine")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("REQUIREMENTS")]),e._v(" "),s("ul",[s("li",[e._v("A working connection to your lab machines.")]),e._v(" "),s("li",[e._v("A lab machine set up for X2Go connection (home machines are by default set up with X2Go and Rstudio).")])])]),e._v(" "),s("h3",{attrs:{id:"install-x2go-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-x2go-client"}},[e._v("#")]),e._v(" Install X2Go client")]),e._v(" "),s("p",[e._v("Install the "),s("a",{attrs:{href:"https://wiki.x2go.org/doku.php/doc:installation:x2goclient",target:"_blank",rel:"noopener noreferrer"}},[e._v("x2go client"),s("OutboundLink")],1),e._v(" on your own local machine.")]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("OS X/macOS")]),s("p",[s("ul",[s("li",[s("p",[e._v("Run brew to install both xquartz and x2goclient:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("brew cask "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" xquartz\nbrew cask "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" x2goclient\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("REQUIREMENT")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Homebrew package manager for macOS: brew"),s("OutboundLink")],1)])])]),e._v(" "),s("li",[s("p",[e._v("Please read the "),s("a",{attrs:{href:"https://wiki.x2go.org/doku.php/doc:installation:x2goclient#os_x",target:"_blank",rel:"noopener noreferrer"}},[e._v("X2Go installation docs"),s("OutboundLink")],1),e._v(" for handy tweaks.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("OS X 10.15 Catalina")]),e._v(" "),s("p",[e._v("In case of issues with x2goclient you can try "),s("a",{attrs:{href:"https://code.x2go.org/releases/X2GoClient_nightly_macosx/x2goclient-4.1.2.2.git20191230.1893.heuler.OSX_10_13.dmg",target:"_blank",rel:"noopener noreferrer"}},[e._v("nightly build"),s("OutboundLink")],1),e._v(" version.")])])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Windows")]),s("p"),s("p",[e._v("Download and run the "),s("a",{attrs:{href:"https://wiki.x2go.org/doku.php/doc:installation:x2goclient#ms_windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("X2Go client"),s("OutboundLink")],1),e._v(" clicking "),s("code",[e._v("Download X2Go for MS Windows™ and install.")]),e._v(" and then selecting the "),s("code",[e._v("exe-file")]),e._v(".")]),e._v(" "),s("p")]),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Linux (Ubuntu / Debian)")]),s("p"),s("p",[e._v("Install x2goclient using apt:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update -y "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y x2goclient\n")])])]),s("p")]),s("h3",{attrs:{id:"configure-the-x2go-client-for-home-machines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-x2go-client-for-home-machines"}},[e._v("#")]),e._v(" Configure the X2Go client for home machines")]),e._v(" "),s("p",[e._v("Once installed, open X2Go and click "),s("code",[e._v("New session")]),e._v(" and enter a "),s("em",[e._v("Session name")]),e._v(" that you will use to identify this connection later, e.g. "),s("em",[e._v("demolab - rstudio")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),s("p",[e._v("The configuration below will work on "),s("router-link",{attrs:{to:"/faq/compute/#machine-types"}},[e._v("home")]),e._v(" machines. This configuration will -not- work on unmanaged "),s("router-link",{attrs:{to:"/faq/compute/#machine-types"}},[e._v("iaas and blue")]),e._v(" machines.")],1)]),e._v(" "),s("h4",{attrs:{id:"in-the-session-tab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-the-session-tab"}},[e._v("#")]),e._v(" In the "),s("code",[e._v("Session")]),e._v(" tab")]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Server section")]),s("p",[s("ul",[s("li",[s("p",[s("em",[e._v("Host")]),e._v(": "),s("code",[e._v("10.5.5.12")])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Login/username")]),e._v(": "),s("code",[e._v("<your-lab-username>")])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("SSH port")]),e._v(": "),s("code",[e._v("22")])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Use RSA/DSA key for ssh connection")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("For Mac and Linux:")]),e._v(" "),s("p",[e._v('Leave blank if your login is "passwordless" (key-based). If not, confer the \''),s("router-link",{attrs:{to:"/getting-started/how-to-connect/#simplify-your-life"}},[e._v("establish a password less login")]),e._v("' section in the installation guide.")],1)]),e._v(" "),s("li",[s("p",[e._v("For Windows:")]),e._v(" "),s("p",[e._v("You will need to save the access key to your local machine and point to this file: (1) log into your lab "),s("code",[e._v("home")]),e._v(" machine, (2) print your key with "),s("code",[e._v("cat ~/.ssh/id_rsa")]),e._v(", (3) open "),s("em",[e._v("Notepad")]),e._v(" on your local machine and copy the text from "),s("code",[e._v("-----BEGIN KEY-----")]),e._v(" to "),s("code",[e._v("-----END KEY-----")]),e._v(" (including both headers and the key between) into a file that your save on your computer. (4) link to this file in the window "),s("em",[e._v("Use RSA/DSA key for ssh connection")]),e._v(".")])])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Try auto login")]),e._v(": "),s("code",[e._v("Check")])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Use Proxy server for SSH connection")]),e._v(": "),s("code",[e._v("Check")])])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Proxy server section")]),s("p",[s("ul",[s("li",[s("em",[e._v("Proxy server type:")]),e._v(" "),s("code",[e._v("SSH")])]),e._v(" "),s("li",[s("em",[e._v("Host:")]),e._v(" "),s("code",[e._v("<lab-ip>")]),e._v(" "),s("ul",[s("li",[e._v("For all: This is your lab specific IP that starts with "),s("code",[e._v("10.42.130.")]),e._v(". You will find the full address in the software that you use to connect to your lab.")])])]),e._v(" "),s("li",[s("em",[e._v("Port:")]),e._v(" "),s("code",[e._v("22")])]),e._v(" "),s("li",[s("em",[e._v("Same login as on X2Go Sever:")]),e._v(" "),s("code",[e._v("Leave blank")])]),e._v(" "),s("li",[s("em",[e._v("Login:")]),e._v(" "),s("code",[e._v("<your-lab-username>")]),e._v(" "),s("ul",[s("li",[e._v("For all: This is the user name that you use to connect to your lab.")])])]),e._v(" "),s("li",[s("em",[e._v("Same password as on X2Go Server:")]),e._v(" "),s("code",[e._v("Leave blank")])]),e._v(" "),s("li",[s("em",[e._v("RSA/DSA key:")]),e._v(" "),s("ul",[s("li",[e._v("For Mac and Linux: "),s("code",[e._v("Leave blank")])]),e._v(" "),s("li",[e._v("For Windows: "),s("code",[e._v("Link to the same file that you established above")])])])]),e._v(" "),s("li",[s("em",[e._v("ssh-agent or default ssh key:")]),e._v(" "),s("code",[e._v("Check")])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Session type section")]),s("p",[s("ul",[s("li",[e._v("Choose "),s("code",[e._v("Single application")]),e._v(" from the drop down menu")]),e._v(" "),s("li",[e._v("Add "),s("code",[e._v("/usr/bin/xterm")]),e._v(" in the command window")])])])]),s("h4",{attrs:{id:"in-the-connection-tab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-the-connection-tab"}},[e._v("#")]),e._v(" In the "),s("code",[e._v("Connection")]),e._v(" tab")]),e._v(" "),s("p",[e._v("Play with the "),s("em",[e._v("Connection speed")]),e._v(" and "),s("em",[e._v("Compression")]),e._v(" methods. For office use "),s("code",[e._v("LAN")]),e._v(" and "),s("code",[e._v("16m-png")]),e._v(" should be fine.")]),e._v(" "),s("h4",{attrs:{id:"in-the-media-tab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-the-media-tab"}},[e._v("#")]),e._v(" In the "),s("code",[e._v("Media")]),e._v(" tab")]),e._v(" "),s("ul",[s("li",[e._v("Uncheck "),s("code",[e._v("Client side printing support")])]),e._v(" "),s("li",[e._v("Uncheck "),s("code",[e._v("Enable sound support")])])]),e._v(" "),s("p",[e._v("Hit "),s("code",[e._v("OK")]),e._v(" in the lower right corner.")]),e._v(" "),s("h4",{attrs:{id:"connect-to-x2go-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-x2go-server"}},[e._v("#")]),e._v(" Connect to X2Go server")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Ensure that your HUNT Cloud VPN is running and connected.")])]),e._v(" "),s("li",[s("p",[e._v("Click on your newly saved session in X2Go to connect to your lab machine.\nIf this works you should see a terminal pop up on your screen.")])]),e._v(" "),s("li",[s("p",[e._v("Type "),s("code",[e._v("xclock")]),e._v(" in the terminal to test the setup. With a little bit of luck,\nyou should now see a new window popping up with a digital clock.")])])]),e._v(" "),s("h4",{attrs:{id:"connect-to-other-software"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-other-software"}},[e._v("#")]),e._v(" Connect to other software")]),e._v(" "),s("p",[e._v("You may use X2Go to access software with graphical interfaces.\nSuch software needs to be installed in your lab machine.")]),e._v(" "),s("p",[e._v("For your home machine, "),s("router-link",{attrs:{to:"/working-in-your-lab/analytical-tools/r-studio/#install-r-studio"}},[e._v("RStudio")]),e._v(" should be installed by default. To access this program, go back to your configuration and update "),s("code",[e._v("Session type")]),e._v(" at the bottom of the "),s("code",[e._v("Session tab")]),e._v(" from "),s("code",[e._v("/usr/bin/xterm/")]),e._v(" to the location of Rstudio ("),s("code",[e._v("/usr/bin/rstudio")]),e._v(") and reconnect. With a little bit of luck, you should now see Rstudio on the your screen. If so, time to celebrate with coffee! If not, time to visit the "),s("router-link",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/#troubleshooting"}},[e._v("troubleshooting section")]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"configure-the-x2go-client-for-unmanaged-machines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-x2go-client-for-unmanaged-machines"}},[e._v("#")]),e._v(" Configure the X2Go client for unmanaged machines")]),e._v(" "),s("p",[e._v("Once installed, open X2Go and click "),s("code",[e._v("New session")]),e._v(" and enter a "),s("em",[e._v("Session name")]),e._v(" that you will use to identify this connection later, e.g. "),s("em",[e._v("demolab - rstudio")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),s("p",[e._v("The configuration below will only work on "),s("code",[e._v("iaas")]),e._v(" or "),s("code",[e._v("blue")]),e._v(" machines, and not home machines. This setup require that someone in your lab already have installed X2Go server and your software of choice on the particular machine you will be connecting to.")])]),e._v(" "),s("h4",{attrs:{id:"in-the-session-tab-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-the-session-tab-2"}},[e._v("#")]),e._v(" In the "),s("code",[e._v("Session")]),e._v(" tab")]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Server section")]),s("p",[s("ul",[s("li",[s("p",[s("em",[e._v("Host")]),e._v(": "),s("code",[e._v("10.5.5.<something>")])]),e._v(" "),s("ul",[s("li",[e._v("You need to type in the IP address for the machine that is set up for X2Go. You will fine the IP by logging into the iaas machine on ssh and type "),s("code",[e._v("ifconfig | grep 10.5.5.")])])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Login/username")]),e._v(": "),s("code",[e._v("<iaas-machine-username>")])]),e._v(" "),s("ul",[s("li",[e._v("The default user name of iaas and blue machines is "),s("code",[e._v("ubuntu")]),e._v(". It may be good to confer with your lab coordinator to learn their specific setup for the machine you plan to access.")])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("SSH port")]),e._v(": "),s("code",[e._v("22")])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Use RSA/DSA key for ssh connection")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("For Mac and Linux:")]),e._v(" "),s("p",[e._v('Leave blank if your login is "passwordless" (key-based). If not, confer the \''),s("router-link",{attrs:{to:"/getting-started/how-to-connect/#simplify-your-life"}},[e._v("establish a password less login")]),e._v("' section in the installation guide.")],1)]),e._v(" "),s("li",[s("p",[e._v("For Windows:")]),e._v(" "),s("p",[e._v("You will need to save the access keys to your local machine and point to this file: (1) log into your lab "),s("code",[e._v("home")]),e._v(" machine, (2) print your key with "),s("code",[e._v("cat ~/.ssh/id_rsa")]),e._v(", (3) open "),s("em",[e._v("Notepad")]),e._v(" on your local machine and copy the text from "),s("code",[e._v("-----BEGIN KEY-----")]),e._v(" to "),s("code",[e._v("-----END KEY-----")]),e._v(" (including both headers and the key between) into a file that your save on your computer. (4) link to this file in the window "),s("em",[e._v("Use RSA/DSA key for ssh connection")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("On IAAS nodes:")]),e._v(" "),s("p",[e._v("In addition to the steps above, ensure that you are able to log directly into the machine from your local machine following "),s("a",{attrs:{href:"#install-x2go-server-on-unamanaged-lab-machine-iaas"}},[e._v("this guide")]),e._v(".")])])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Try auto login")]),e._v(": "),s("code",[e._v("Check")])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Use Proxy server for SSH connection")]),e._v(": "),s("code",[e._v("Check")])])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Proxy server section")]),s("p",[s("ul",[s("li",[s("em",[e._v("Proxy server type:")]),e._v(" "),s("code",[e._v("SSH")])]),e._v(" "),s("li",[s("em",[e._v("Host:")]),e._v(" "),s("code",[e._v("<lab-ip>")]),e._v(" "),s("ul",[s("li",[e._v("This is your lab specific IP that starts with "),s("code",[e._v("10.42.130.")]),e._v(". You will find the full address in the software that you use to connect to your lab.")])])]),e._v(" "),s("li",[s("em",[e._v("Port:")]),e._v(" "),s("code",[e._v("22")])]),e._v(" "),s("li",[s("em",[e._v("Same login as on X2Go Sever:")]),e._v(" "),s("code",[e._v("Leave blank")])]),e._v(" "),s("li",[s("em",[e._v("Login:")]),e._v(" "),s("code",[e._v("<your-lab-username>")]),e._v(" "),s("ul",[s("li",[e._v("This is the user name that you use to connect to your lab.")])])]),e._v(" "),s("li",[s("em",[e._v("Same password as on X2Go Server:")]),e._v(" "),s("code",[e._v("Leave blank")])]),e._v(" "),s("li",[s("em",[e._v("RSA/DSA key:")]),e._v(" "),s("ul",[s("li",[e._v("For Mac and Linux: "),s("code",[e._v("Leave blank")])]),e._v(" "),s("li",[e._v("For Windows: "),s("code",[e._v("Link to the same file that you established above")])])])]),e._v(" "),s("li",[s("em",[e._v("ssh-agent or default ssh key:")]),e._v(" "),s("code",[e._v("Check")])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Session type section")]),s("p",[s("ul",[s("li",[e._v("Choose "),s("code",[e._v("Single application")]),e._v(" from the drop down menu")]),e._v(" "),s("li",[e._v("Add "),s("code",[e._v("/usr/bin/xterm")]),e._v(" in the command window")])])])]),s("h4",{attrs:{id:"remaining-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remaining-configuration"}},[e._v("#")]),e._v(" Remaining configuration")]),e._v(" "),s("p",[e._v("Follow the setups outlines in the "),s("code",[e._v("Configure the X2Go client for home machines")]),e._v(" for further setup, including "),s("code",[e._v("In the connection tab")]),e._v(", "),s("code",[e._v("In the media tab")]),e._v(", "),s("code",[e._v("connecting to the X2Go server")]),e._v(" and "),s("code",[e._v("Connect to other software")]),e._v(": "),s("router-link",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/#configure-the-x2go-client-for-home-machines"}},[e._v("Start here")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"install-a-desktop-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-a-desktop-environment"}},[e._v("#")]),e._v(" Install a desktop environment")]),e._v(" "),s("p",[e._v("The default X2Go setup connects directly to individual applications. This section describe how you may install a lightweight "),s("a",{attrs:{href:"https://www.xfce.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("XFCE"),s("OutboundLink")],1),e._v(" desktop environment using common settings.")]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Minimal setup of XFCE desktop")]),s("p"),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update -y "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" autoremove -y\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y --no-install-recommends xubuntu-desktop\n")])])]),s("p")]),s("p",[e._v("The default setup will need some care to run smoothly:")]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("TAB completion")]),s("p",[s("ul",[s("li",[s("p",[e._v("Fixing TAB completion using shell: (1) Log into your lab machine and (2) run this code:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" -i "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'s|name="\\&lt\\;Super\\&gt\\;Tab" type="string" value="switch_window_key"|name="\\&lt\\;Super\\&gt\\;Tab" type="empty"|g\'')]),e._v(" ~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-keyboard-shortcuts.xml\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Fixing TAB completion using GUI approach over x2go client.")]),e._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token list punctuation"}},[e._v("1.")]),e._v(" Open the Xfce "),s("span",{pre:!0,attrs:{class:"token code keyword"}},[e._v("`Application Menu`")]),e._v(" > "),s("span",{pre:!0,attrs:{class:"token code keyword"}},[e._v("`Settings`")]),e._v(" > "),s("span",{pre:!0,attrs:{class:"token code keyword"}},[e._v("`Window Manager`")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[e._v("2.")]),e._v(" Click on the "),s("span",{pre:!0,attrs:{class:"token code keyword"}},[e._v("`Keyboard Tab`")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[e._v("3.")]),e._v(" Clear the Switch window for same application setting\n")])])])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Copy-paste functionality")]),s("p"),s("p",[e._v("Connect to your lab machine and run this code:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Client is connecting "),s("strong",[e._v("from macOS")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" ~/.Xresources\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" u+x ~/.Xresources\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*VT100.translations: #override Meta <KeyPress> V: insert-selection(PRIMARY, CUT_BUFFER0)"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ~/.Xresources\nxrdb -merge ~/.Xresources\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Client is connecting from "),s("strong",[e._v("Windows")]),e._v(" or "),s("strong",[e._v("Linux")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" ~/.Xresources\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" u+x ~/.Xresources\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*VT100.Translations: #override Ctrl Shift <Key>V: insert-selection(CLIPBOARD)"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ~/.Xresources\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*VT100.Translations: #override Ctrl Shift <Key>C: copy-selection(CLIPBOARD)"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ~/.Xresources\nxrdb -merge ~/.Xresources\n")])])])])]),e._v(" "),s("p")]),s("h2",{attrs:{id:"install-x2go-server-on-unamanaged-lab-machine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-x2go-server-on-unamanaged-lab-machine"}},[e._v("#")]),e._v(" Install X2Go server on unamanaged lab machine")]),e._v(" "),s("p",[e._v("Connection to X2Go require the application "),s("code",[e._v("x2goserver")]),e._v(" to run for connections to work.\nYou may install this on iaas and blue machines as follows:")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),s("p",[e._v("This section is for lab coordinators that want to set up their unmanaged iaas and blue machines for GUI access.")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("REQUIREMENTS")]),e._v(" "),s("ul",[s("li",[e._v("Root access to your lab machine. The below configuration will not work on home machines.")])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Install x2goserver")]),s("p"),s("p",[e._v("Log into your unmanaged lab machine and install "),s("code",[e._v("x2goserver")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" add-apt-repository ppa:x2go/stable\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" x2goserver -y\n")])])]),s("p")]),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Ensure smooth access")]),s("p"),s("p",[e._v("You need to make sure you and your lab colleagues can log in to the x2go machine passwordless using RSA certificates, e.g. by following these steps:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("From your local machine, log into your lab's entry machine:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("labname"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("-entry\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Form your entry machine, copy your machine key to your iaas-machine with the running X2Go server:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("ssh-copy-id "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("name-of-iaas-node"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),s("p",[s("a",{attrs:{href:"/contact"}},[e._v("Contact us")]),e._v(" if you are unable to make the above step work since a security setting may prohibit this depending on your lab setup.")])])]),e._v(" "),s("li",[s("p",[e._v("Confirm the passwordless route to your iaas machine:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("iaas-node"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Get the IP for your IAAS machine")]),e._v(" "),s("p",[e._v("Inside your IAAS node, list the IP address for the node with "),s("code",[e._v("ifconfig")]),e._v(". The IP address is listed after "),s("code",[e._v("inet addr:")]),e._v(" and start with 10.5. Note this as you will use this for the X2Go setup on your local machine (steps above).")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("hostname")]),e._v(" -I\n")])])])])]),e._v(" "),s("p")]),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Password prompts during login")]),s("p"),s("p",[e._v("X2Go rely either password or certificate to authenticate your connection. If the certificate do not work (or not included), your may be asked to insert your password four times before your application start. If so, try to fetch and save your certificate as described in our "),s("router-link",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/#configure-the-x2go-client-for-home-machines"}},[e._v("X2Go configuration")]),e._v(" under "),s("code",[e._v("Use RSA/DSA key for ssh connection")]),e._v(".")],1),e._v(" "),s("p")]),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Manually 'killing' a stuck X2Go session")]),s("p"),s("p",[e._v("From time to time your X2Go sessions may get stuck, such as when your software inside X2Go consumes all available memory. In such circumstances you may need to manually terminate the stuck X2Go processes using the command line in your lab machine.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("From your local machine, connect to your lab machine over SSH, either using command line (Mac/Linux) or MobaXterm (Windows).")])]),e._v(" "),s("li",[s("p",[e._v("Once onboard your lab machine, list X2Go processes running under your user name.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v(" aux "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" x2go "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("whoami")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])])]),s("p",[e._v("A single line of your output will similar to the output below. This is from a process running the RStudio software. Your output may look different depending on the software your run:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("demouser 22463 0.0 0.0 11300 1796 ? Ss Jul11 0:00 /bin/bash /usr/bin/x2goruncommand 50 22408 demouser-50-1563761927_stRrstudio_dp32 39401 /usr/bin/rstudio nosnd R\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Identify the process ID number that you want to terminate. The unique process ID is listes in the second column in the output from Step 2. For example, the process ID for the X2Go session below is "),s("code",[e._v("22463")]),e._v(" (your number will be different).")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("demouser 22463 0.0 0.0 11300 1796 ? Ss Jul11 0:00 /bin/bash /usr/bin/x2goruncommand 50 22408 demouser-50-1563761927_stRrstudio_dp32 39401 /usr/bin/rstudio nosnd R\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Terminate the session ID that is stuck.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("kill")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("process-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# e.g.: kill 22463")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Confirm that the process is killed by reapeating Step 2 to verify that the process ID is no longer listed. Repeat the procedure to kill additional processes if needed.")])]),e._v(" "),s("li",[s("p",[e._v("Restart X2Go.")])])]),e._v(" "),s("p")])])}),[],!1,null,null,null);t.default=o.exports}}]);