# CardPrinter-App
A Node.js Application that will read a given set of student records from a JSON file and will pass on this data across Apache  Apollo to a Python script that will then generate membership cards as jpeg images. As these jpeg images are being generated their corresponding file names and the student data are sent back to our Node.js app in real-time and the same are dynamically displayed in the user-interface. This app demonstrates the interoperability between a Node.js app and the Python script and the same process can be used in any Enterprise Integartion scenario.

#Pre-requisites:
1. Latest version of **Node.js**
2. Latest version of **Python**
3. Latest version of **Apache Apollo**
4. Latest version of **Java** with **JAVA_HOME** set
5. **Nodemon** installed

#Installations:
Since package.json file is provided inside the node folder just browse through the Node folder and type **npm install** on the prompt. All the dependencies listed in the package.json file will be installed on the machine

#Provisions for the App to Start:
1. Open the Command prompt and browse into the **apollo** folder formed after installing apache apollo. Go inside the **broker** folder which is in **apollo** folder. After moving in the broker folder type:
'''
    C:\apollo\apacheapollo\bin apache create brokerbot
'''
This command will create an instance of the broker bot inside the broker folder.
To start the broker instance type:
'''
  bin\apollo-broker run
'''
Access localhost:61680/ users.properties to create a new user and password.
After accessing the Apache Apollo Interface create two instances of the queue - **toPython** and **fromPython**

2. After the code for the NodeJS app is completed open the command promt(new one) and traverse to the node folder.Type **nodemon**. This will start the NodeJS app.and when properly connected to the Apache Apollo broker would write **connected** to the Console
3. After this start another command prompt and move to the **py** folder. and run the command
'''
  python <filename>.py
'''
This will start the python script

#Steps how it works:
1. Layout of the Front-End Interface
https://cloud.githubusercontent.com/assets/15226944/16644254/682df3ac-43d0-11e6-9185-4aa25f5141ba.jpg

