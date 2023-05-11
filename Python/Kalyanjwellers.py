print("Kalyan Jewellers")

Name = input("Enter Your Name : ")
Gender = input("Enter Your Gender (M/F) : ")
Age = int(input("Enter Your Age : "))

#print("Name : ",Name)
#print("Gender : ",Gender)
#print("Age : ",Age)

Product = input("Enter Product Name : ")
Gram = int(input("Enter Gram of Product : "))
Gold_price = int(input("Enter the Gold Price per Gram : "))

#print("Product : ",Product)
#print("Gram : ",Gram)
#print("Gold_price : ",Gold_price)

Total_rate = int(Gram * Gold_price)
print("Total Gold Rate : ",Total_rate)

making_charges = int(input("Enter Making Charges : "))
#print("making_charges : ",making_charges)

Total_charges = int(making_charges * Gram)
print("Total Making Charges : ",Total_charges)

Total_amt = int(Total_rate + Total_charges)
print("Total Amount : ",Total_amt)


Discount = int()

if Gender == "M":
        if Age > 65:
            if Total_amt in range(21000, 31000):
                print("Discount 20%")
                Discount = int(Total_rate)*20/100
            elif Total_amt in range(31001, 51000):
                print("Discount 30%")
                Discount = int(Total_rate)*30/100
            elif Total_amt > 51001:
                print("Discount 35%")
                Discount = int(Total_rate)*35/100
            else:
                print("No discount")
        else:
        
            if Total_amt in range(21000, 31000):
                print("Discount 10%")
                Discount = int(Total_rate)*10/100
            elif Total_amt in range(31001, 51000):
                print("Discount 20%")
                Discount = int(Total_rate)*20/100
            elif Total_amt > 51001:
                print("Discount 25%")
                Discount = int(Total_rate)*25/100
            else:
                print("No discount")
       

else:
    if Age > 65:
        if Total_amt in range(21000, 31000):
            print("Discount 25%")
            Discount = int(Total_rate)*25/100
        elif Total_amt in range(31001, 51000):
            print("Discount 35%")
            Discount = int(Total_rate)*35/100
        elif Total_amt > 51001:
            print("Discount 40%")
            Discount = int(Total_rate)*40/100
        else:
            print("No discount")
    else:
        if Total_amt in range(21000, 31000):
            print("Discount 15%")
            Discount = int(Total_rate)*15/100
        elif Total_amt in range(31001, 51000):
            print("Discount 25%")
            Discount = int(Total_rate)*25/100
        elif Total_amt > 51001:
            print("Discount 30%")
            Discount = int(Total_rate)*30/100
        else:
            print("No discount")


Dis_amt = Discount
print("Discount Amount : ",Dis_amt)

Net_amt = Total_amt - Dis_amt
print("Net Bill Amount : ",Net_amt)



