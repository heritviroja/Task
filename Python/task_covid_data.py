import datetime
import os


# import date with date time
current_date = datetime.date.today()
date_string = current_date.strftime("%Y-%m-%d")
file_name = f"{date_string}.txt"
# folder path for file save
folder_path = "C:\\Users\\HC\\Desktop\\Python\\Task_covid"
file_path = os.path.join(folder_path, file_name)
# for check file is exist
if os.path.isfile(file_path):
    print(f"File '{file_name}' found.")
    with open(file_path, "a") as file:

        name = input("Enter name : ")
        age = int(input("Enter age : "))
        gender = input("Enter  gender : ")
        contact_no = int(input("Enter contact no : "))
        doze = int(input("Enter No of Doze: "))
        file.write(
            f"your name is: {name}\nyour age is: {age}\nyour gender is: {gender}\nyour number is: {contact_no}\ndoze is: {doze}\n--------------------------------------------\n")
        file.close()
# if file not present else part create new file
else:

    with open(file_path, "w") as file:
        print(f"A new text file '{file_name}' has been created.")
        name = input("Enter name : ")
        age = int(input("Enter age : "))
        gender = input("Enter  gender : ")
        contact_no = int(input("Enter contact no : "))
        doze = int(input("Enter No of Doze: "))
        file.write(
            f"your name is: {name}\nyour age is: {age}\nyour gender is: {gender}\nyour number is: {contact_no}\ndoze is: {doze}\n--------------------------------------------\n")
        file.close()
