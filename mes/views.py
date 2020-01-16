from django.shortcuts import render
from .forms import ReportForm
from .email import send_welcome_email
from django.http import HttpResponse, Http404,HttpResponseRedirect
from .models import NewsLetterRecipients

# Create your views here.
def home(request):
    title = 'HOMELAND'
    return render(request,'index.html', {'title':title,})


# def todays_report(request):
#     if request.method == 'POST':
#         form = ReportForm(request.POST)
#         if form.is_valid():
#             name = form.cleaned_data['your_name']
#             email = form.cleaned_data['email']
#             recipient = NewsLetterRecipients(name = name,email =email)
#             recipient.save()
#             send_welcome_email(name,email)
#             HttpResponseRedirect('')
#     else:
#         form = ReportForm()
#     return render(request, 'report.html', {"letterForm":form})