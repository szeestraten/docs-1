(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{382:function(t,e,a){"use strict";a.r(e);var s=a(19),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bluebox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bluebox"}},[t._v("#")]),t._v(" BlueBox")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/huntdatacenter/BlueBox",target:"_blank",rel:"noopener noreferrer"}},[t._v("BlueBox"),a("OutboundLink")],1),t._v(" is a tool that we have developed to help you distribute your analysis across a fleet of cloud machines inside your lab. In short, BlueBox aid with the installation of software packages and handling of data, code and results across many machines.")]),t._v(" "),a("p",[t._v("Visit our "),a("a",{attrs:{href:"https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("BlueBox Guide"),a("OutboundLink")],1),t._v(" on Github for the full documentation. Below is an outline of the steps to get you started.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Requirements")]),t._v(" "),a("p",[t._v("The installation of BlueBox requires access to iaas and blue machines in your lab. "),a("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" for activation if you would like to give it a try.")])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("p",[t._v("BluBox is installed on your home machines where it orchestrate the communication with the machines that you have at hand for analysis.")]),t._v(" "),a("ol",[a("li",[t._v("Install dependencies on your home machine:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" tox "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tox\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Download the BlueBox code:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/huntdatacenter/bluebox.git "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" bluebox\n")])])]),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("ol",[a("li",[t._v("Specify the machines in your fleet:")])]),t._v(" "),a("p",[t._v("Open at the "),a("code",[t._v("example.hosts.txt")]),t._v(" file to see the formatting. Then generate a new file named "),a("code",[t._v("hosts.txt")]),t._v(" that specify the machines you would like to utilize. This list will be provided for us if you do not have blue or iaas machines in your lab. And example of such a list could be:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ubuntu@demolab-blue-azelf\nubuntu@demolab-blue-maiar\nubuntu@demolab-blue-zaran\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Test your setup")])]),t._v(" "),a("p",[t._v("When using BlueBox for the firs time (or when you are adding new machines) run this code to set up machine keys:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" setup\n")])])]),a("p",[t._v("Now that your machines are activated, head over to our "),a("a",{attrs:{href:"https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("BlueBox Guide"),a("OutboundLink")],1),t._v(" on Github to complete the full configuration to set up your software dependencies, push your code and data and run your code in parallel.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("a",{attrs:{href:"/contact"}},[t._v("Concat us")]),t._v(" us for a helping hand to get up and running. This is early days for your setup and documentation. We appreciate questions and feedback so we can improve BlueBox and make it as simple as possible for you to distribute analysis across machines.")])]),t._v(" "),a("h2",{attrs:{id:"guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guide"}},[t._v("#")]),t._v(" Guide")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("BlueBox Guide"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);