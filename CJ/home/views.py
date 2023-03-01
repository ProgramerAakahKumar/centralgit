import email
from django.contrib.auth.models import User
from django.shortcuts import render, redirect, HttpResponse
from datetime import  datetime
from home.models import Contact
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

# Create your views here.
def index(request):
    return render(request, 'index.html')
    #return HttpResponse("This is Home page")

def about(request):
    return render(request, 'about.html')
    #return HttpResponse("This is About page")

def services(request):
    return render(request, 'services.html')
    #return HttpResponse("This is Services page")


def contact(request):
    # if request.method == "POST":
    if request.method == 'POST':
        my_file = request.FILES['my_file']

        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        desc = request.POST.get('desc')
        # my_file = request.POST.get('my_file')
        print("##############  HELLO YOUR FILE IS UPLOADED ##############  ",my_file)
        contact = Contact( name=name, email=email, phone=phone, desc=desc, my_file=my_file, date=datetime.today())
        contact.save()
        messages.success(request, 'Your message has been sent. Thanks for connect with us!')

    return render(request, 'contact.html')
    #return HttpResponse("This is Contact page")
    
def signup(request):
    if request.method == "POST":
        # username = request.POST.get("username")
        username = request.POST['username']
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        pass1 = request.POST['pass1']
        pass2 = request.POST['pass2']
        
        myuser = User.objects.create_user(username, email, pass1)
        myuser.first_name =fname
        myuser.last_name = lname
        
        myuser.save()
        
        messages.success(request, "Account has been successfully created")
        
        return redirect('signin')
    return render(request, "signup.html")

def signin(request):
    if request.method == "POST":
        username = request.POST['username']
        pass1 = request.POST['pass1']
        
        user = authenticate(username=username, password=pass1)
        
        if user is not None:
            login(request, user)
            fname = user.first_name
            return render(request, "index.html",{'fname':fname})
            
        else:
            messages.error(request, "Bad Credentials")
            return redirect("/")
        
        
    return render(request, "signin.html")
