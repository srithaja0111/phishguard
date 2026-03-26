# phishguard
PhishGuard - Phishing blocker browser extension
Abstract:
It is a smart browser extension designed to stop phishing attacks. It checks the websites URL and to detect whether website is real or fake. If the site is dangerous, it shows a warning message to the user but also block access to the website to prevent any interaction. This improves user safety and reduces the risk of cyber attacks.

Tools:

1.Visualstudio code(vs code) - Used for writing and editing code and supports extension for HTML,CSS,JavaScript
2.Google Chrome Browser - Used to run and test the extension 
3.Git - Used for version control 
Architecture:
User → Opens Website → Extension Captures URL → Detection System Checks.
If Safe → Allow Access
If Phishing → Block + Show Warning Page
Working:
1.User Visits a Website - When the user opens any website, the extension automatically gets activated in the background.
2.URL Extraction - The extension extracts the current website URL using browser APIs.
3.URL Analysis - The system checks the URL for suspicious patterns such as: 
->Unusual domain names
->Presence of special characters(@,&,%,$,#)
->use of IP address instead of domain
->Similarity to popular websites
4.Phishing Detection - Using rules or a machine learning model:
->If the website is legitimate → Safe
->If the website is suspicious → Phishing detected
5.Blocking the Website - If phishing is detected:
->The extension prevents the page from loading fully
->Redirects the user to a warning page
->Disables interaction with the website
6.Warning Message Display - A warning message is shown:
"This website is unsafe"
"Access has been blocked to protect your data"
7.User Action - User can:
->Go back to safety
->Avoid entering any personal information
libraries and Technologies used:
->HTML (Structure)
->CSS (Design)
->JavaScript (Logic)
->Chrome Extension API
->Machine Learning (for better accuracy)
Execution:
1.Open Google Chrome
2.Type: chrome://extensions/
3.Enable Developer Mode
4.Click Load Unpacked
5.Select the project folder
-> Run the Extension:
Open any website
The extension runs in the background automatically
Case 1: Safe Website 
Page loads normally
Case 2: Phishing Website 
Website is blocked
User is redirected to warning page
Output:
if it is a safe website -> Loads normally
if it is a phishing website:
->Blocked automatically
->Warning page displayed
Conclusion:
The Phishing Blocker Browser Extension is an effective tool to enhance online security. By detecting and blocking phishing websites in real-time, it protects users from cyber threats. This project demonstrates how browser extensions can be used to improve safe browsing and prevent fraud.


 
